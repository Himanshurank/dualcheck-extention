import * as vscode from "vscode";
import { StatusBarManager } from "./ui/statusBarManager";
import { AttendanceController } from "./controllers/attendanceController";

let statusBarManager: StatusBarManager | undefined;

export function activate(context: vscode.ExtensionContext): void {
  console.log("Zoho-Basecamp Check-in/out extension is now active");

  statusBarManager = new StatusBarManager();
  statusBarManager.show();

  const checkInCommand = vscode.commands.registerCommand(
    "zoho-basecamp.checkIn",
    AttendanceController.handleCheckIn
  );

  const checkOutCommand = vscode.commands.registerCommand(
    "zoho-basecamp.checkOut",
    AttendanceController.handleCheckOut
  );

  context.subscriptions.push(
    checkInCommand,
    checkOutCommand,
    ...statusBarManager.getDisposables()
  );
}

export function deactivate(): void {
  if (statusBarManager) {
    statusBarManager.dispose();
    statusBarManager = undefined;
  }

  console.log("Zoho-Basecamp Check-in/out extension has been deactivated");
}
