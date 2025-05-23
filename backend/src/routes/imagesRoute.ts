import { Router, Request, Response, NextFunction } from "express";
import prisma from "../prisma";
const imagesRoute = Router();

imagesRoute.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const images = await prisma.images.findMany();
      const fingerprint = {
        ip: req.ip,
        userAgent: req.get("User-Agent"),
        acceptLanguage: req.get("Accept-Language"),
        referer: req.get("Referer"),
        device_id: req.headers["x-device-id"],
      };
      res.status(200).json({ images, fingerprint });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: err instanceof Error ? err.message : "Unexpected error",
      });
      next(err);
    }
  }
);

export default imagesRoute;
