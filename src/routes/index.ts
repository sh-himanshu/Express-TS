import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", (_: Request, res: Response): void => {
  res.send("Hello World !!");
});

export default router;
