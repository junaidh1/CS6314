// import bcrypt from "bcrypt";
// import passport from "passport";

// import db from "../config/db.js";

const getHomePage = (req, res) => {
    /**
     * TODO: if user is authenticated, render the home page with username on navbar and ability to add products to cart
     * TODO: if user is not authenticated, render the home page with option to sign in or sign up, and no ability to add products to cart
     */

    res.render("index");
};

const getSignInPage = (req, res) => {};

const getSignUpPage = (req, res) => {};

const getSearchPage = (req, res) => {};

const getItemPage = (req, res) => {};

const getInventoryPage = (req, res) => {};

const getCartPage = (req, res) => {};

const getCheckOutPage = (req, res) => {};

const signOut = (req, res) => {};

export {
    getCartPage,
    getCheckOutPage,
    getHomePage,
    getInventoryPage,
    getItemPage,
    getSearchPage,
    getSignInPage,
    getSignUpPage,
    signOut,
};
