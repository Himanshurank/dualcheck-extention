import * as vscode from "vscode";
import axios from "axios";

export async function postMessage(
  config: vscode.WorkspaceConfiguration,
  isCheckIn: boolean
): Promise<void> {
  const basecampToken = config.get("basecampToken") as string;
  const basecampAccountId = config.get("basecampAccountId") as string;
  const basecampProjectId = config.get("basecampProjectId") as string;
  const basecampMessageBoardId = config.get("basecampMessageBoardId") as string;
  const checkInMessage = config.get("checkInMessage") as string;
  const checkOutMessage = config.get("checkOutMessage") as string;

  if (!basecampToken || !basecampProjectId || !basecampMessageBoardId) {
    throw new Error("Basecamp credentials or project details not configured");
  }

  const message = isCheckIn ? checkInMessage : checkOutMessage;

  const response = await axios.post(
    `https://3.basecampapi.com/${basecampAccountId}/buckets/${basecampProjectId}/message_boards/${basecampMessageBoardId}/messages.json`,
    {
      content: message,
    },
    {
      headers: {
        Authorization: `Bearer ${basecampToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 201) {
    throw new Error(`Basecamp message posting failed: ${response.statusText}`);
  }
}
