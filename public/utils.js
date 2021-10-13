"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePort = exports.fullUrl = void 0;
const url_1 = __importDefault(require("url"));
function fullUrl(req) {
    return url_1.default.format({
        protocol: req.protocol,
        host: req.get("host"),
        pathname: req.originalUrl,
    });
}
exports.fullUrl = fullUrl;
function normalizePort(val) {
    if (!val)
        return;
    const port = typeof val === "string" ? parseInt(val, 10) : val;
    if (!isNaN(port) && port >= 0)
        return port;
}
exports.normalizePort = normalizePort;
