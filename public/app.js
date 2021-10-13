"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./middleware/logger"));
const index_1 = __importDefault(require("./routes/index"));
const dogs_1 = __importDefault(require("./routes/dogs"));
const paste_1 = __importDefault(require("./routes/paste"));
const utils_1 = require("./utils");
// import path from "path";
const PORT = utils_1.normalizePort(process.env.PORT) || 8000;
const app = express_1.default();
// For Static webpage hosting
// app.use(express.static(path.join(__dirname, "public")));
// Middleware
app.use(logger_1.default);
// Built-in BodyParser
app.use(express_1.default.json());
// Routes
app.use("/", index_1.default);
app.use("/dogs", dogs_1.default);
app.use("/paste", paste_1.default);
app.set("port", PORT);
const server = app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
process.on("SIGTERM", () => {
    console.debug("SIGTERM signal received: closing HTTP server");
    server.close(() => {
        console.debug("HTTP server closed");
    });
});
