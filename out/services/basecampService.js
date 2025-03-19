"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasecampService = void 0;
const axios_1 = __importDefault(require("axios"));
class BasecampService {
    constructor(config) {
        this.config = config;
        this.validateConfig();
    }
    validateConfig() {
        if (!this.config.token ||
            !this.config.projectId ||
            !this.config.messageBoardId) {
            throw new Error("Basecamp credentials or project details not configured");
        }
    }
    getApiUrl() {
        return `https://3.basecampapi.com/${this.config.accountId}/buckets/${this.config.projectId}/message_boards/${this.config.messageBoardId}/messages.json`;
    }
    async postCheckIn() {
        await this.postMessage(this.config.checkInMessage);
    }
    async postCheckOut() {
        await this.postMessage(this.config.checkOutMessage);
    }
    async postMessage(content) {
        try {
            const response = await axios_1.default.post(this.getApiUrl(), { content }, {
                headers: {
                    Authorization: `Bearer ${this.config.token}`,
                    "Content-Type": "application/json",
                },
            });
            if (response.status !== 201) {
                throw new Error(`Basecamp message posting failed: ${response.statusText}`);
            }
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                throw new Error(`Basecamp API error: ${error.message}`);
            }
            throw error;
        }
    }
}
exports.BasecampService = BasecampService;
//# sourceMappingURL=basecampService.js.map