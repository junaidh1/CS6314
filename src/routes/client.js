import express from 'express';

import {
    getCartPage,
    getCheckOutPage,
    getHomePage,
    getInventoryPage,
    getItemPage,
    getSearchPage,
    getSignInPage,
    getSignUpPage,
    signOut,
} from '../controllers/client.js';
import {
    isAdmin,
    isAuth,
    isNotAuth,
} from '../util.js';

const router = express.Router();

router.get("/", getHomePage);

router.get("/signin", isNotAuth, getSignInPage); // Non-user route

router.get("/signup", isNotAuth, getSignUpPage); // Non-user route

router.get("/search", getSearchPage);

router.get("/products/:id", getItemPage);

router.get("/inventory", isAdmin, getInventoryPage); // Admin route

router.get("/cart", isAuth, getCartPage); // User route

router.get("/checkout", isAuth, getCheckOutPage); // User route

router.post("/signout", isAuth, signOut); // User route

export default router;
