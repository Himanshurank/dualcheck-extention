import * as vscode from "vscode";
import axios from "axios";
import { formatDateTime } from "./utils";

export async function checkIn(
  config: vscode.WorkspaceConfiguration
): Promise<void> {
  const zohoToken = config.get("zohoToken") as string;
  const zohoEmail = config.get("zohoEmail") as string;

  if (!zohoToken || !zohoEmail) {
    throw new Error("Zoho OAuth token or email not configured");
  }

  const now = new Date();
  const formattedDateTime = formatDateTime(now);

  const response = await axios.get(
    "https://people.zoho.com/people/api/attendance",
    {
      params: {
        dateFormat: "dd/MM/yyyy HH:mm:ss",
        checkIn: formattedDateTime,
        emailId: zohoEmail,
      },
      headers: {
        Authorization: `Zoho-oauthtoken ${zohoToken}`,
      },
    }
  );

  if (response.status !== 200) {
    throw new Error(`Zoho check-in failed: ${response.statusText}`);
  }
}

export async function checkOut(
  config: vscode.WorkspaceConfiguration
): Promise<void> {
  const zohoToken = config.get("zohoToken") as string;
  const zohoEmail = config.get("zohoEmail") as string;

  if (!zohoToken || !zohoEmail) {
    throw new Error("Zoho OAuth token or email not configured");
  }

  const now = new Date();
  const formattedDateTime = formatDateTime(now);

  const response = await axios.get(
    "https://people.zoho.com/people/api/attendance",
    {
      params: {
        dateFormat: "dd/MM/yyyy HH:mm:ss",
        checkOut: formattedDateTime,
        emailId: zohoEmail,
      },
      headers: {
        Authorization: `Zoho-oauthtoken ${zohoToken}`,
      },
    }
  );

  if (response.status !== 200) {
    throw new Error(`Zoho check-out failed: ${response.statusText}`);
  }
}
