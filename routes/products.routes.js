import { Router } from "express";
import { getAllProducts, getProductById, createProduct, deleteProduct } from "../controllers/products.controllers.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", authenticate, getAllProducts);
router.get("/:id", authenticate, getProductById);
router.post("/create", authenticate, createProduct);
router.delete("/:id", authenticate, deleteProduct);

export default router;
