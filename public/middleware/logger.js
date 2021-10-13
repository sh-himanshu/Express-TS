"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
exports.default = (req, _, next) => {
    console.log("--------------------------------");
    console.log("URL:", utils_1.fullUrl(req));
    console.log("Time:", new Date().toString());
    console.log("--------------------------------");
    next();
};
