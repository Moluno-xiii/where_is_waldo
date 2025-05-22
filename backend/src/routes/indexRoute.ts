import { Router, Request, Response } from "express";
import prisma from "../prisma";
const indexRoute = Router();

indexRoute.get("/", async (req: Request, res: Response) => {
  await prisma.players.create({
    data: {
      name: "Test user 1",
    },
  });
  const data = await prisma.players.findMany();
  console.log("prisma test data", data);
  res.status(200).json({ message: "Welcome to the index route!!" });
});

export default indexRoute;
