import db from "../../config/db.js";


const getProducts = async (req, res) => {
    try {
        const {search, filter} = req.query;
        let productsQuery = {};
        let types = [];
        const allProducts = await db.collection("products").find({}).toArray();
        types = [...new Set(allProducts.map(product => product.type))];
        // const products = await db.collection("products").find({}).toArray();

        if (search) {
            productsQuery.name = { $regex: new RegExp(search, 'i') };
        }
        if (filter) {
            productsQuery.type = filter;
        }
        
        const products = Object.keys(productsQuery).length > 0 ?
            allProducts.filter(product =>
                Object.keys(productsQuery).every(key =>
                    product[key] === productsQuery[key]
                )
            ) : allProducts;
        
        res.status(200).json({ products, types });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

const getProduct = async (req, res) => {
    try {
    
      console.log('Backend Received Product ID:', req.params.id);
  
        const product = await db.collection('products').findOne({ id: req.params.id});
        const products = await db.collection('products').find({}).toArray();
        const types = [...new Set(products.map(product => product.type))];
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.status(200).json({product,types});
    } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  

const createProduct = async (req, res) => {};

const updateProduct = async (req, res) => {};

const deleteProduct = async (req, res) => {};

export { createProduct, deleteProduct, getProduct, getProducts, updateProduct };
