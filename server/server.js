import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import dns from "dns";

import { connectToDatabase } from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import projectRouter from "./routes/projectRoutes.js";

const app = express();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

await connectToDatabase();

const allowedOrigins = (
  process.env.ORIGINS ||
  "http://localhost:5173"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

console.log("Allowed CORS origins:", allowedOrigins);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Running!!!");
});

app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter);

app.use((err, _req, res, _next) => {
  console.log(`[Error] ${err.message}`);
  res.status(500).json({ error: err.message });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});