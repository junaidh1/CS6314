import db from "../../config/db.js";

const getCart = async (req, res) => {
    try {
        const username = req.user.username;
        const cart = (await db.collection("carts").findOne({ username })).cart;

        res.json({ username, cart });
    } catch (error) {
        // Handle any errors that occur during the database operation
        console.error("Error fetching cart:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const addToCart = async (req, res) => {
    try {
        const product_id = req.params.id;
        const username = req.user.username;

        // Check if product exists in database
        const product = await db
            .collection("products")
            .findOne({ id: product_id });

        if (!product) {
            return res.status(404).json({ error: "Product not found." });
        }

        // Check if item already exists in cart.
        const item = await db.collection("carts").findOne({
            username,
            "cart.product_id": product_id,
        });

        if (!item) {
            // If not, add it. Set the quantity to 1.
            await db.collection("carts").updateOne(
                { username },
                {
                    $push: {
                        cart: {
                            product_id,
                            quantity: 1,
                        },
                    },
                }
            );
        } else {
            // Otherwise, increment the quantity by one.
            await db.collection("carts").updateOne(
                {
                    username,
                    "cart.product_id": product_id,
                },
                {
                    $inc: {
                        "cart.$.quantity": 1,
                    },
                }
            );
        }

        // res.json({
        //     message: `Product ${product_id} added to ${username}'s cart.`,
        // });
        res.redirect("http://localhost:3000/")
    } catch (error) {
        // Handle any errors that occur during the database operation
        console.error("Error adding product to cart:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const removeFromCart = async (req, res) => {
    try {
        const product_id = req.params.id;
        const username = req.user.username;

        // Check if item exists in database
        const product = await db
            .collection("products")
            .findOne({ id: product_id });

        if (!product) {
            return res.status(404).json({ error: "Product not found." });
        }

        // Check if item already exists in cart.
        const item = await db.collection("carts").findOne({
            username,
            "cart.product_id": product_id,
        });

        if (!item) {
            return res
                .status(404)
                .json({ error: "Product not found in cart." });
        }

        // Decrement the item quantity by one.
        await db.collection("carts").updateOne(
            {
                username,
                "cart.product_id": product_id,
            },
            {
                $inc: {
                    "cart.$.quantity": -1,
                },
            }
        );

        // Remove the item from the cart, if it has a quantity of 0.
        await db.collection("carts").updateOne(
            {
                username,
                "cart.quantity": 0,
            },
            {
                $pull: {
                    cart: { quantity: 0 },
                },
            }
        );

        res.json({
            message: `Product ${product_id} removed from ${username}'s cart.`,
        });
    } catch (error) {
        // Handle any errors that occur during the database operation
        console.error("Error removing product from cart:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const checkout = async (req, res) => {
    try {
        const username = req.user.username;
        const cart = (await db.collection("carts").findOne({ username })).cart;

        // Check if cart is empty
        if (cart.length === 0) {
            return res.status(400).json({
                error: "Cannot checkout an empty cart.",
            });
        }

        // Empty the user's cart
        await db
            .collection("carts")
            .updateOne({ username }, { $set: { cart: [] } });

        //res.json({ message: `Checkout successful for ${username}'s cart.` });
        res.redirect("http://localhost:3000/")
    } catch (error) {
        // Handle any errors that occur during the database operation
        console.error("Error checking out:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export { addToCart, checkout, getCart, removeFromCart };
