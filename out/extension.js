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
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const statusBarManager_1 = require("./ui/statusBarManager");
const attendanceController_1 = require("./controllers/attendanceController");
let statusBarManager;
function activate(context) {
    console.log("Zoho-Basecamp Check-in/out extension is now active");
    statusBarManager = new statusBarManager_1.StatusBarManager();
    statusBarManager.show();
    const checkInCommand = vscode.commands.registerCommand("zoho-basecamp.checkIn", attendanceController_1.AttendanceController.handleCheckIn);
    const checkOutCommand = vscode.commands.registerCommand("zoho-basecamp.checkOut", attendanceController_1.AttendanceController.handleCheckOut);
    context.subscriptions.push(checkInCommand, checkOutCommand, ...statusBarManager.getDisposables());
}
exports.activate = activate;
function deactivate() {
    if (statusBarManager) {
        statusBarManager.dispose();
        statusBarManager = undefined;
    }
    console.log("Zoho-Basecamp Check-in/out extension has been deactivated");
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map