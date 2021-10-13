import url from "url";
import { Request } from "express";

export function fullUrl(req: Request): string {
  return url.format({
    protocol: req.protocol,
    host: req.get("host"),
    pathname: req.originalUrl,
  });
}

export function normalizePort(val: any): number | void {
  if (!val) return;
  const port: number = typeof val === "string" ? parseInt(val, 10) : val;
  if (!isNaN(port) && port >= 0) return port;
}
