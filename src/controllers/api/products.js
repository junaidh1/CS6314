import db from '../../config/db.js';

const getProducts = async (req, res) => {
    try {
        const { search, filter } = req.query;
        let productsQuery = {};
        let products = await db.collection("products").find().toArray();
        let types = [...new Set(products.map((product) => product.type))];

        if (search) {
            productsQuery = {
                $or: [
                    { name: { $regex: new RegExp(search, "i") } },
                    { description: { $regex: new RegExp(search, "i") } },
                ],
            };
        } else if (filter) {
            productsQuery = { type: { $regex: new RegExp(filter, "i") } };
        }

        if (search || filter) {
            products = await db
                .collection("products")
                .find(productsQuery)
                .toArray();
        }
        res.status(200).json({ products, types });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getProduct = async (req, res) => {
    try {
        const product = await db
            .collection("products")
            .findOne({ id: req.params.id });
        const products = await db.collection("products").find({}).toArray();
        const types = [...new Set(products.map((product) => product.type))];
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json({ product, types });
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const createProduct = async (req, res) => {};

const updateProduct = async (req, res) => {};

const deleteProduct = async (req, res) => {};

export { createProduct, deleteProduct, getProduct, getProducts, updateProduct };
