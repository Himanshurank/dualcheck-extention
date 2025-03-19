import * as vscode from "vscode";

export class StatusBarManager {
  private checkInItem: vscode.StatusBarItem;
  private checkOutItem: vscode.StatusBarItem;

  constructor() {
    this.checkInItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Left,
      100
    );
    this.checkInItem.text = "$(sign-in) Check In";
    this.checkInItem.command = "zoho-basecamp.checkIn";
    this.checkInItem.tooltip = "Check in to Zoho People and Basecamp";

    this.checkOutItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Left,
      99
    );
    this.checkOutItem.text = "$(sign-out) Check Out";
    this.checkOutItem.command = "zoho-basecamp.checkOut";
    this.checkOutItem.tooltip = "Check out from Zoho People and Basecamp";
  }

  public show(): void {
    this.checkInItem.show();
    this.checkOutItem.show();
  }

  public dispose(): void {
    this.checkInItem.dispose();
    this.checkOutItem.dispose();
  }

  public getDisposables(): vscode.Disposable[] {
    return [this.checkInItem, this.checkOutItem];
  }
}
