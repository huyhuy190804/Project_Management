import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import connectDB from "./config/db.js"; // Nhớ đuôi .js
import userRoutes from "./routes/userRoutes.js"; // Nhớ đuôi .js
import projectRoutes from "./routes/projectRoutes.js"; // Nhớ đuôi .js
import { specs } from "./config/swagger.js"; // Swagger config
import cors from "cors";
// Load biến môi trường
dotenv.config();

const app = express();
const allowedOrigins = [
  "https://app.com",
  "https://admin.app.com",
  "http://localhost:3000"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
// Middleware quan trọng: Giúp Express hiểu được dữ liệu JSON
// Nếu thiếu dòng này, req.body sẽ bị undefined
app.use(express.json());

// Kết nối Database
connectDB();

// Swagger Documentation
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    swaggerOptions: {
      urls: [
        {
          url: "/api-docs",
          name: "Project Management API",
        },
      ],
    },
  }),
);

// Route gốc
// Mọi request bắt đầu bằng /api/users sẽ đi vào userRoutes
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
