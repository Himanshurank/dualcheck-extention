"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZohoService = void 0;
const axios_1 = __importDefault(require("axios"));
const dateUtils_1 = require("../utils/dateUtils");
class ZohoService {
    constructor(config) {
        this.apiUrl = "https://people.zoho.com/people/api/attendance";
        this.config = config;
        this.validateConfig();
    }
    validateConfig() {
        if (!this.config.token || !this.config.email) {
            throw new Error("Zoho OAuth token or email not configured");
        }
    }
    async checkIn() {
        const formattedDateTime = (0, dateUtils_1.formatDateTime)(new Date());
        await this.makeApiRequest({
            dateFormat: "dd/MM/yyyy HH:mm:ss",
            checkIn: formattedDateTime,
            emailId: this.config.email,
        });
    }
    async checkOut() {
        const formattedDateTime = (0, dateUtils_1.formatDateTime)(new Date());
        await this.makeApiRequest({
            dateFormat: "dd/MM/yyyy HH:mm:ss",
            checkOut: formattedDateTime,
            emailId: this.config.email,
        });
    }
    async makeApiRequest(params) {
        try {
            const response = await axios_1.default.get(this.apiUrl, {
                params,
                headers: {
                    Authorization: `Zoho-oauthtoken ${this.config.token}`,
                },
            });
            if (response.status !== 200) {
                throw new Error(`Zoho API request failed: ${response.statusText}`);
            }
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                throw new Error(`Zoho API error: ${error.message}`);
            }
            throw error;
        }
    }
}
exports.ZohoService = ZohoService;
//# sourceMappingURL=zohoService.js.map