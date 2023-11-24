import express from "express";

import {
    addToCart,
    checkout,
    getCart,
    removeFromCart,
} from "../../controllers/api/cart.js";

const router = express.Router();

router.get("/", getCart); // User route

router.post("add/:id", addToCart); // User route

router.post("remove/:id", removeFromCart); // User route

router.post("/checkout", checkout); // User route

export default router;
