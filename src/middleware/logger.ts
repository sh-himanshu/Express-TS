import { Response, Request, NextFunction } from "express";
import { fullUrl } from "../utils";

export default (req: Request, _: Response, next: NextFunction): void => {
  console.log("--------------------------------");
  console.log("URL:", fullUrl(req));
  console.log("Time:", new Date().toString());
  console.log("--------------------------------");
  next();
};
