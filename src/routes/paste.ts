import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.post("/create", (req: Request, res: Response) => {
  console.log(req.query, req.params, req.body);
  res.send(req.body);
});

export default router;
