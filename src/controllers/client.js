// import bcrypt from "bcrypt";
// import passport from "passport";

// import getProducts from "../controllers/api/products.js";

// import db from "../config/db.js";

// const getHomePage = (req, res) => {
//     /** await.fetch("http://localhost:3000/api/products")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//     **/
//     /**
//      * TODO: if user is authenticated, render the home page with username on navbar and ability to add products to cart
//      * TODO: if user is not authenticated, render the home page with option to sign in or sign up, and no ability to add products to cart
//      */

//     res.render("index");
// };
import fetch from 'node-fetch';


const getHomePage = async (req, res) => {
    try {
        const response = await fetch("http://localhost:3000/api/products");
        if (!response.ok) {
            console.log("Error fetching products");
            throw new Error("Failed to fetch products");
        }
        const { products, types } = await response.json();
        // Check user authentication status here...
        // For now, assuming user is not authenticated
        //   const isAuthenticated = false;
  
        res.render("index", { products, types });
    } catch (error) {
            console.error("Error fetching products:", error);
            // res.render("index", { products: [], types: [], isAuthenticated: false });
            res.render("index", { products: [], types: [] });
    }
  };

const getSignInPage = (req, res) => {

        res.render("signin")

    
};

const getSignUpPage = (req, res) => {
    res.render("signup")
};

const getSearchPage = (req, res) => {
    res.status(200).json({msg: "Reached Search Path"});
};

const getItemPage = (req, res) => {};

const getInventoryPage = (req, res) => {};

const getCartPage = (req, res) => {
    res.render("cart")
};

const getCheckOutPage = (req, res) => {
    res.render("credit")
};

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