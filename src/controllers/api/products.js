import db from '../../config/db.js';

// const getProducts = async (req, res) => {
//     const products = await db.collection("products").find({});
//     res.status(200).send(products);
//     // TODO: If there are no query parameters, return all products in the database
//     // TODO: If there are query parameters, return all products in the database that match the query parameters (e.g. /api/products?search=cake&filter=wedding)
// };

const getProducts = async (req, res) => {
    try {
        const products = await db.collection("products").find({}).toArray();
        const types = [...new Set(products.map(product => product.type))];
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
            .findOne({ _id: req.params.id });
        res.status(200).send(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const createProduct = async (req, res) => {};

const updateProduct = async (req, res) => {};

const deleteProduct = async (req, res) => {};

export { createProduct, deleteProduct, getProduct, getProducts, updateProduct };
