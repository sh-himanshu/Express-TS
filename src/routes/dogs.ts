import express, { Response, Request } from "express";

const router = express.Router();

router.get("/", (_: Request, res: Response): void => {
  res.send("Woof Woof !");
});

export default router;
