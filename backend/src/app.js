import express from "express";
import cors from "cors";
import morgan from "morgan";

import usersRouter from './server_code/users/routers/users.routers.js';

const app = express();
// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// settings
app.set("port", process.env.PORT || 8000);

// routers
app.use('/api/users', usersRouter);

export default app;
