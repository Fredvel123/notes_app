import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();
// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// settings
app.set("port", process.env.PORT || 8000);

// routers

export default app;
