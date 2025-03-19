import axios from "axios";
import { BasecampConfig } from "../models/config";

export class BasecampService {
  private readonly config: BasecampConfig;

  constructor(config: BasecampConfig) {
    this.config = config;
    this.validateConfig();
  }

  private validateConfig(): void {
    if (
      !this.config.token ||
      !this.config.projectId ||
      !this.config.messageBoardId
    ) {
      throw new Error("Basecamp credentials or project details not configured");
    }
  }

  private getApiUrl(): string {
    return `https://3.basecampapi.com/${this.config.accountId}/buckets/${this.config.projectId}/message_boards/${this.config.messageBoardId}/messages.json`;
  }

  public async postCheckIn(): Promise<void> {
    await this.postMessage(this.config.checkInMessage);
  }

  public async postCheckOut(): Promise<void> {
    await this.postMessage(this.config.checkOutMessage);
  }

  private async postMessage(content: string): Promise<void> {
    try {
      const response = await axios.post(
        this.getApiUrl(),
        { content },
        {
          headers: {
            Authorization: `Bearer ${this.config.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 201) {
        throw new Error(
          `Basecamp message posting failed: ${response.statusText}`
        );
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Basecamp API error: ${error.message}`);
      }
      throw error;
    }
  }
}
