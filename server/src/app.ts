import express from "express";
import cors from "cors";
import "express-async-errors";

import { router } from "~routes/index";
import { errorHandler } from "~middlewares/errorHandler";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

export { app };
