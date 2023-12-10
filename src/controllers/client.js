import fetch from "node-fetch";

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
    res.render("signin");
};

const getSignUpPage = (req, res) => {
    res.render("signup");
};

const getSearchPage = (req, res) => {
    res.status(200).json({ msg: "Reached Search Path" });
};

const getItemPage = async (req, res) => {
    try {
        const response = await fetch(
            `http://localhost:3000/api/products/${req.params.id}`
        );

        if (!response.ok) {
            console.log("Error fetching product");
            throw new Error("Failed to fetch product");
        }

        const { product, types } = await response.json();
        res.render("product", { product, types });
    } catch (error) {
        console.error("Error fetching product details:", error);
        res.status(500).send("Internal Server Error");
    }
};

const getInventoryPage = (req, res) => {};

const getCartPage = (req, res) => {
    res.render("cart");
};

const getCheckOutPage = (req, res) => {
    res.render("credit");
};

const signOut = (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        res.status(200).redirect("/");
    });
};

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
