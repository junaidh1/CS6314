import fetch from "node-fetch";

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
        res.render("index", { products: [], types: [], user: req.user });
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
        let backendUrl = 'http://localhost:3000/api/products';
        if (search) {
            backendUrl += `?search=${encodeURIComponent(search)}`;
        } else if (filter) {
            backendUrl += `?search=${encodeURIComponent(filter)}`;
        }
        
        if (search || filter) {
            const response = await fetch(backendUrl);
            if (!response.ok) {
                console.log(`Error fetching products for query "${search || filter}"`);
                throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
            }
            const { products, types } = await response.json();
            res.render('index', { products, types, user: req.user });
        } else {
            res.redirect('/');
        }
    } catch (error) {
        console.error('Error fetching search results:', error);
        res.status(500).send('Internal Server Error');
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
const getInventoryAddPage = async (req,res)=>{
    res.render("add");
};
const getInventoryEditPage = async (req, res) => {
    try {
        console.log("trying to edit product");

        // Make sure to await the fetch and extract the JSON data
        const response = await fetch(`http://localhost:3000/api/products/${req.params.id}`);
        const data = await response.json();

        // Extract the product data from the 'product' property
        const product = data.product;

        console.log("product= ", product);

        if (product) {
            // Render the update page with the product data
            res.render('update', { product: product });
        } else {
            // Handle the case where the product is not found
            res.status(404).send('Product not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
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
    getInventoryPage,
    getInventoryAddPage,
    getInventoryEditPage,
    getItemPage,
    getSearchPage,
    getSignInPage,
    getSignUpPage,
    signOut,
};
