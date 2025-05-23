import "dotenv/config";
import cors from "cors";
import express, { Response, Request } from "express";
import indexRoute from "./routes/indexRoute";
import imagesRoute from "./routes/imagesRoute";

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: ["Content-Type", "X-Device-Id"],
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use("/", indexRoute);
app.use("/images", imagesRoute);
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not found!!" });
});

export default app;
