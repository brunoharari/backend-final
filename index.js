import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import productRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { handleNotFound, handleErrors } from "./middlewares/error.middleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// Manejo de rutas no encontradas
app.use(handleNotFound);

// Middleware global de errores
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
