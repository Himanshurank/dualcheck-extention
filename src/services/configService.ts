import * as vscode from "vscode";
import { AppConfig, ZohoConfig, BasecampConfig } from "../models/config";

export class ConfigService {
  public static getConfig(): AppConfig {
    const config = vscode.workspace.getConfiguration("zoho-basecamp");

    return {
      zoho: this.getZohoConfig(config),
      basecamp: this.getBasecampConfig(config),
    };
  }

  private static getZohoConfig(
    config: vscode.WorkspaceConfiguration
  ): ZohoConfig {
    const token = config.get("zohoToken") as string;
    const email = config.get("zohoEmail") as string;

    return { token, email };
  }

  private static getBasecampConfig(
    config: vscode.WorkspaceConfiguration
  ): BasecampConfig {
    return {
      token: config.get("basecampToken") as string,
      accountId: config.get("basecampAccountId") as string,
      projectId: config.get("basecampProjectId") as string,
      messageBoardId: config.get("basecampMessageBoardId") as string,
      checkInMessage: config.get("checkInMessage") as string,
      checkOutMessage: config.get("checkOutMessage") as string,
    };
  }
}
