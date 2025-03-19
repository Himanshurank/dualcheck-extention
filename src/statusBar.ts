import * as vscode from "vscode";

/**
 * Status bar items for check-in and check-out
 */
export class StatusBarManager {
  private checkInItem: vscode.StatusBarItem;
  private checkOutItem: vscode.StatusBarItem;

  constructor() {
    // Create check-in status bar item
    this.checkInItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Left,
      100
    );
    this.checkInItem.text = "$(sign-in) Check In";
    this.checkInItem.command = "zoho-basecamp.checkIn";
    this.checkInItem.tooltip = "Check in to Zoho People and Basecamp";

    // Create check-out status bar item
    this.checkOutItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Left,
      99
    );
    this.checkOutItem.text = "$(sign-out) Check Out";
    this.checkOutItem.command = "zoho-basecamp.checkOut";
    this.checkOutItem.tooltip = "Check out from Zoho People and Basecamp";
  }

  /**
   * Show status bar items
   */
  public show(): void {
    this.checkInItem.show();
    this.checkOutItem.show();
  }

  /**
   * Dispose status bar items
   */
  public dispose(): void {
    this.checkInItem.dispose();
    this.checkOutItem.dispose();
  }

  /**
   * Get all disposable items
   */
  public getDisposables(): vscode.Disposable[] {
    return [this.checkInItem, this.checkOutItem];
  }
}
