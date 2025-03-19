import axios from "axios";
import { ZohoConfig } from "../models/config";
import { formatDateTime } from "../utils/dateUtils";

export class ZohoService {
  private readonly apiUrl = "https://people.zoho.com/people/api/attendance";
  private readonly config: ZohoConfig;

  constructor(config: ZohoConfig) {
    this.config = config;
    this.validateConfig();
  }

  private validateConfig(): void {
    if (!this.config.token || !this.config.email) {
      throw new Error("Zoho OAuth token or email not configured");
    }
  }

  public async checkIn(): Promise<void> {
    const formattedDateTime = formatDateTime(new Date());

    await this.makeApiRequest({
      dateFormat: "dd/MM/yyyy HH:mm:ss",
      checkIn: formattedDateTime,
      emailId: this.config.email,
    });
  }

  public async checkOut(): Promise<void> {
    const formattedDateTime = formatDateTime(new Date());

    await this.makeApiRequest({
      dateFormat: "dd/MM/yyyy HH:mm:ss",
      checkOut: formattedDateTime,
      emailId: this.config.email,
    });
  }

  private async makeApiRequest(params: Record<string, string>): Promise<void> {
    try {
      const response = await axios.get(this.apiUrl, {
        params,
        headers: {
          Authorization: `Zoho-oauthtoken ${this.config.token}`,
        },
      });

      if (response.status !== 200) {
        throw new Error(`Zoho API request failed: ${response.statusText}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Zoho API error: ${error.message}`);
      }
      throw error;
    }
  }
}
