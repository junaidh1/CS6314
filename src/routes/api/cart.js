import {
    addToCart,
    checkout,
    getCart,
    removeFromCart,
} from "../../controllers/api/cart.js";

import express from "express";
import { isAuth } from "../../util.js";

const router = express.Router();

router.post("/checkout", isAuth, checkout); // User route

router.get("/", isAuth, getCart); // User route

router.post("/:id", isAuth, addToCart); // User route

router.delete("/:id", isAuth, removeFromCart); // User route

export default router;
