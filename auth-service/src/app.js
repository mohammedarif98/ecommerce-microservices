import express from "express"
import cors from "cors";
import rateLimit from "express-rate-limit";
import config from "./config/index.js";
import authRoutes from "./routes/auth.routes.js"


const app = express();

const limiter = rateLimit(config.rateLimit)
app.use(limiter);
app.use(cors(config.cors))


app.use("/api/auth", authRoutes)


export default app;


