import "dotenv/config";
import express, { Response, Request } from "express";
import indexRoute from "./routes/indexRoute";

const app = express();

app.use("/", indexRoute);
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not found!!" });
});

export default app;
