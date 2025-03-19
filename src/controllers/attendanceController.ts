import * as vscode from "vscode";
import { ZohoService } from "../services/zohoService";
import { BasecampService } from "../services/basecampService";
import { ConfigService } from "../services/configService";

export class AttendanceController {
  public static async handleCheckIn(): Promise<void> {
    try {
      const config = ConfigService.getConfig();

      const zohoService = new ZohoService(config.zoho);
      const basecampService = new BasecampService(config.basecamp);

      await zohoService.checkIn();
      await basecampService.postCheckIn();

      vscode.window.showInformationMessage(
        "Successfully checked in to Zoho People and Basecamp!"
      );
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      vscode.window.showErrorMessage(`Check-in failed: ${errorMessage}`);
    }
  }

  public static async handleCheckOut(): Promise<void> {
    try {
      const config = ConfigService.getConfig();

      const zohoService = new ZohoService(config.zoho);
      const basecampService = new BasecampService(config.basecamp);

      await zohoService.checkOut();
      await basecampService.postCheckOut();

      vscode.window.showInformationMessage(
        "Successfully checked out from Zoho People and Basecamp!"
      );
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      vscode.window.showErrorMessage(`Check-out failed: ${errorMessage}`);
    }
  }
}
