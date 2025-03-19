"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMessage = void 0;
const axios_1 = __importDefault(require("axios"));
async function postMessage(config, isCheckIn) {
    const basecampToken = config.get("basecampToken");
    const basecampAccountId = config.get("basecampAccountId");
    const basecampProjectId = config.get("basecampProjectId");
    const basecampMessageBoardId = config.get("basecampMessageBoardId");
    const checkInMessage = config.get("checkInMessage");
    const checkOutMessage = config.get("checkOutMessage");
    if (!basecampToken || !basecampProjectId || !basecampMessageBoardId) {
        throw new Error("Basecamp credentials or project details not configured");
    }
    const message = isCheckIn ? checkInMessage : checkOutMessage;
    const response = await axios_1.default.post(`https://3.basecampapi.com/${basecampAccountId}/buckets/${basecampProjectId}/message_boards/${basecampMessageBoardId}/messages.json`, {
        content: message,
    }, {
        headers: {
            Authorization: `Bearer ${basecampToken}`,
            "Content-Type": "application/json",
        },
    });
    if (response.status !== 201) {
        throw new Error(`Basecamp message posting failed: ${response.statusText}`);
    }
}
exports.postMessage = postMessage;
//# sourceMappingURL=basecamp.js.map