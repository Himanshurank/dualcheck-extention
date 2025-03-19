"use strict";
/**
 * Utility functions for the extension
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateTime = void 0;
/**
 * Format date in dd/MM/yyyy HH:mm:ss format for Zoho API
 */
function formatDateTime(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
exports.formatDateTime = formatDateTime;
//# sourceMappingURL=utils.js.map