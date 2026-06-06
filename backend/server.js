import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./src/connections/db.js";
import authRoutes from "./src/routes/userRoutes.js";
import taskRoutes from "./src/routes/taskRoutes.js";
import statsRoutes from "./src/routes/statsRoutes.js";
import cors from "cors";

const env = dotenv.config();
const app = express();

const frontendUrls = (env.parsed?.FRONTEND_URL || process.env.FRONTEND_URL || 'http://localhost:5173').split(',').map((url) => url.trim());

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (frontendUrls.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS policy does not allow access from ${origin}`));
  },
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/api/auth", authRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/stats", statsRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    errors: err.errors || [],
  });
});


connectDB();

const PORT = env.parsed?.PORT || process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
