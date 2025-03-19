"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOut = exports.checkIn = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("./utils");
async function checkIn(config) {
    const zohoToken = config.get("zohoToken");
    const zohoEmail = config.get("zohoEmail");
    if (!zohoToken || !zohoEmail) {
        throw new Error("Zoho OAuth token or email not configured");
    }
    const now = new Date();
    const formattedDateTime = (0, utils_1.formatDateTime)(now);
    const response = await axios_1.default.get("https://people.zoho.com/people/api/attendance", {
        params: {
            dateFormat: "dd/MM/yyyy HH:mm:ss",
            checkIn: formattedDateTime,
            emailId: zohoEmail,
        },
        headers: {
            Authorization: `Zoho-oauthtoken ${zohoToken}`,
        },
    });
    if (response.status !== 200) {
        throw new Error(`Zoho check-in failed: ${response.statusText}`);
    }
}
exports.checkIn = checkIn;
async function checkOut(config) {
    const zohoToken = config.get("zohoToken");
    const zohoEmail = config.get("zohoEmail");
    if (!zohoToken || !zohoEmail) {
        throw new Error("Zoho OAuth token or email not configured");
    }
    const now = new Date();
    const formattedDateTime = (0, utils_1.formatDateTime)(now);
    const response = await axios_1.default.get("https://people.zoho.com/people/api/attendance", {
        params: {
            dateFormat: "dd/MM/yyyy HH:mm:ss",
            checkOut: formattedDateTime,
            emailId: zohoEmail,
        },
        headers: {
            Authorization: `Zoho-oauthtoken ${zohoToken}`,
        },
    });
    if (response.status !== 200) {
        throw new Error(`Zoho check-out failed: ${response.statusText}`);
    }
}
exports.checkOut = checkOut;
//# sourceMappingURL=zoho.js.map