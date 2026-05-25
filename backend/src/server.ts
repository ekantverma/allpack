import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { testConnection } from "./config/email.js";
import { errorHandler } from "./middleware/errorHandler.js";
import emailRoutes from "./routes/index.js";

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 5000;

/*
|--------------------------------------------------------------------------
| Middleware
|--------------------------------------------------------------------------
*/

// CORS
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim())
  : ["http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Body Parser
app.use(express.json({ limit: "10mb" }));

app.use(
  express.urlencoded({
    extended: true,
  })
);

/*
|--------------------------------------------------------------------------
| Health Check Route
|--------------------------------------------------------------------------
*/
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running successfully",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

app.use("/api/email", emailRoutes);

/*
|--------------------------------------------------------------------------
| 404 Handler
|--------------------------------------------------------------------------
*/

app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/*
|--------------------------------------------------------------------------
| Global Error Handler
|--------------------------------------------------------------------------
*/

app.use(errorHandler);

/*
|--------------------------------------------------------------------------
| Start Server
|--------------------------------------------------------------------------
*/

const startServer = async () => {
  try {
    // Verify Email Transport
    const emailConnected = await testConnection();

    app.listen(port, () => {
      console.log(`
==================================================
🚀 Server Running Successfully
🌐 URL: http://localhost:${port}
==================================================
`);

      if (emailConnected) {
        console.log("✅ Email Service Connected");
      } else {
        console.log("❌ Email Service Failed");
      }

      console.log(`
📌 Available Endpoints

GET    /health

POST   /api/email/send
POST   /api/email/welcome
POST   /api/email/contact-confirmation
POST   /api/email/notification
`);
    });
  } catch (error) {
    console.error("❌ Failed to Start Server");

    console.error(error);

    process.exit(1);
  }
};

startServer();