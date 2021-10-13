import express, { Application } from "express";
import { Server } from "http";
import logger from "./middleware/logger";
import indexRouter from "./routes/index";
import dogsRouter from "./routes/dogs";
import pasteRouter from "./routes/paste";
import { normalizePort } from "./utils";
// import path from "path";

const PORT: number = normalizePort(process.env.PORT) || 8000;
const app: Application = express();

// For Static webpage hosting
// app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(logger);

// Built-in BodyParser
app.use(express.json());

// Routes
app.use("/", indexRouter);
app.use("/dogs", dogsRouter);
app.use("/paste", pasteRouter);

app.set("port", PORT);

const server: Server = app.listen(PORT, (): void => console.log(`Server started on PORT: ${PORT}`));

process.on("SIGTERM", (): void => {
  console.debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.debug("HTTP server closed");
  });
});
