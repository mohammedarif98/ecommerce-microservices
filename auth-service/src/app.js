import express from "express"
import cors from "cors";
import morgan from "morgan"
import rateLimit from "express-rate-limit";
import config from "./config/index.js";
import authRoutes from "./routes/auth.routes.js"
import errorHandler from "./middlewares/error.middleware.js";


const app = express();

app.use(morgan("dev"))
app.use(express.json())
app.use(cors(config.cors))
app.use(rateLimit(config.rateLimit));

app.use("/api/auth", authRoutes)
app.use(errorHandler)

export default app;


