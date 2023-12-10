import {
    createProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct,
} from "../../controllers/api/products.js";

import express from "express";
import { isAdmin } from "../../util.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", isAdmin, createProduct); // Admin route

router.put("/:id", isAdmin, updateProduct); // Admin route

router.delete("/:id", isAdmin, deleteProduct); // Admin route

export default router;
