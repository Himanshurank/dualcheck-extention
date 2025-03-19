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
exports.AttendanceController = void 0;
const vscode = __importStar(require("vscode"));
const zohoService_1 = require("../services/zohoService");
const basecampService_1 = require("../services/basecampService");
const configService_1 = require("../services/configService");
class AttendanceController {
    static async handleCheckIn() {
        try {
            const config = configService_1.ConfigService.getConfig();
            const zohoService = new zohoService_1.ZohoService(config.zoho);
            const basecampService = new basecampService_1.BasecampService(config.basecamp);
            await zohoService.checkIn();
            await basecampService.postCheckIn();
            vscode.window.showInformationMessage("Successfully checked in to Zoho People and Basecamp!");
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
            vscode.window.showErrorMessage(`Check-in failed: ${errorMessage}`);
        }
    }
    static async handleCheckOut() {
        try {
            const config = configService_1.ConfigService.getConfig();
            const zohoService = new zohoService_1.ZohoService(config.zoho);
            const basecampService = new basecampService_1.BasecampService(config.basecamp);
            await zohoService.checkOut();
            await basecampService.postCheckOut();
            vscode.window.showInformationMessage("Successfully checked out from Zoho People and Basecamp!");
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
            vscode.window.showErrorMessage(`Check-out failed: ${errorMessage}`);
        }
    }
}
exports.AttendanceController = AttendanceController;
//# sourceMappingURL=attendanceController.js.map