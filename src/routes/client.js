import express from 'express';

import {
    getCartPage,
    getCheckOutPage,
    getHomePage,
    getInventoryAddPage,
    getInventoryEditPage,
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

router.get("/inventory/add", isAdmin, getInventoryAddPage); // Admin route

router.get("/inventory/:id/edit", isAdmin, getInventoryEditPage); // Admin route

router.get("/cart", isAuth, getCartPage); // User route

router.get("/checkout", isAuth, getCheckOutPage); // User route

router.post("/signout", isAuth, signOut); // User route

export default router;
