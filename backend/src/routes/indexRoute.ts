import { Router, Request, Response } from "express";
import prisma from "../prisma";
const indexRoute = Router();

indexRoute.get("/", async (req: Request, res: Response) => {
  const users = await prisma.players.findMany();
  console.log("prisma test data", users);
  res.status(200).json({ users });
});

export default indexRoute;
