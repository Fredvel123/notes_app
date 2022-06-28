import express from "express";
import cors from "cors";
import morgan from "morgan";

import usersRouter from './server_code/users/routers/users.routers.js';
import authRouter from './server_code/users/routers/auth.routers.js'

const app = express();
// middlewares
app.use(express.json());
const corsOptions = {
    origin: 'https://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions));
app.use(morgan("dev"));

// settings
app.set("port", process.env.PORT || 8000);

// routers
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

export default app;
