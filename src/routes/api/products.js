import express from "express";

import {
    createProduct,
    deleteProduct,
    getProducts,
    updateProduct,
} from "../../controllers/api/products.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct); // Admin route

router.put("/:id", updateProduct); // Admin route

router.delete("/:id", deleteProduct); // Admin route

export default router;