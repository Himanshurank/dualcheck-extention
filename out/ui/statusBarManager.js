"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBarManager = void 0;
const vscode = __importStar(require("vscode"));
class StatusBarManager {
    constructor() {
        this.checkInItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
        this.checkInItem.text = "$(sign-in) Check In";
        this.checkInItem.command = "zoho-basecamp.checkIn";
        this.checkInItem.tooltip = "Check in to Zoho People and Basecamp";
        this.checkOutItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 99);
        this.checkOutItem.text = "$(sign-out) Check Out";
        this.checkOutItem.command = "zoho-basecamp.checkOut";
        this.checkOutItem.tooltip = "Check out from Zoho People and Basecamp";
    }
    show() {
        this.checkInItem.show();
        this.checkOutItem.show();
    }
    dispose() {
        this.checkInItem.dispose();
        this.checkOutItem.dispose();
    }
    getDisposables() {
        return [this.checkInItem, this.checkOutItem];
    }
}
exports.StatusBarManager = StatusBarManager;
//# sourceMappingURL=statusBarManager.js.map