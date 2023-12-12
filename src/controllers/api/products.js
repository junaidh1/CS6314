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


const updateProduct = async (req, res) => {
  const updatedProductData = req.body;
  const productId = req.body.id;
  const price = parseFloat(req.body.price);

  try {
    console.log('Searching for product with ID:', productId);

    // Find the existing product by ID
    const existingProduct = await db.collection("products").findOne({ id: productId });

    console.log('existingProduct:', existingProduct);

    if (existingProduct) {
      // Update the existing product
      await db.collection("products").updateOne(
        { id: productId },
        { $set: { ...updatedProductData, price: price } }
      );
    } else {
      // Insert a new product
      await db.collection("products").insertOne({
        id: productId,
        ...updatedProductData,
        price: price
      });
    }

    res.redirect("http://localhost:3000/");
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


const deleteProduct = async (req, res) => {
    const productId = req.params.id;
  
    try {
      // Find the existing product by ID
      const existingProduct = await db.collection('products').findOne({ id: productId });
  
      if (!existingProduct) {
        // Product not found
        res.status(404).json({ message: 'Product not found' });
        return;
      }
  
      // Delete the product from the database
      const result = await db.collection('products').deleteOne({ id: productId });
  
      if (result.deletedCount === 1) {
        // Product deleted successfully
        res.status(204).send();
      } else {
        // Deletion unsuccessful
        res.status(500).json({ message: 'Failed to delete the product' });
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).send('Internal Server Error');
    }
  };
  
  

export { deleteProduct, getProduct, getProducts, updateProduct };
