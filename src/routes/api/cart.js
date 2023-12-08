import express from 'express';

import {
    addToCart,
    checkout,
    getCart,
    removeFromCart,
} from '../../controllers/api/cart.js';

const router = express.Router();

router.post("/checkout", checkout); // User route

router.get("/", getCart); // User route

router.post("/:id", addToCart); // User route

router.delete("/:id", removeFromCart); // User route

export default router;
