import fetch from 'node-fetch';

const getHomePage = async (req, res) => {
    try {
        const response = await fetch("http://localhost:3000/api/products");
        if (!response.ok) {
            console.log("Error fetching products");
            throw new Error("Failed to fetch products");
        }
        const { products, types } = await response.json();

        res.render("index", { products, types, user: req.user });
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

const getSearchPage = async (req, res) => {
    try {
        const { search, filter } = req.query;
        let backendUrl = "http://localhost:3000/api/products";
        if (search) {
            backendUrl += `?search=${encodeURIComponent(search)}`;
        } else if (filter) {
            backendUrl += `?search=${encodeURIComponent(filter)}`;
        }

        if (search || filter) {
            const response = await fetch(backendUrl);
            if (!response.ok) {
                console.log(
                    `Error fetching products for query "${search || filter}"`
                );
                throw new Error(
                    `Failed to fetch products: ${response.status} ${response.statusText}`
                );
            }
            const { products, types } = await response.json();
            res.render("index", { products, types, user: req.user });
        } else {
            res.redirect("/");
        }
    } catch (error) {
        console.error("Error fetching search results:", error);
        res.status(500).send("Internal Server Error");
    }
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

const getInventoryPage = async (req, res) => {
    const response = await fetch("http://localhost:3000/api/products");
    if (!response.ok) {
        console.log("Error fetching products");
        throw new Error("Failed to fetch products");
    }
    const { products, types } = await response.json();

    res.render("admin", { products, types, user: req.user });
};

const getInventoryAddPage = (req, res) => {};

const getInventoryEditPage = async (req, res) => {
    const product_id = req.params.id;
};

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
    getInventoryAddPage,
    getInventoryEditPage,
    getInventoryPage,
    getItemPage,
    getSearchPage,
    getSignInPage,
    getSignUpPage,
    signOut,
};
