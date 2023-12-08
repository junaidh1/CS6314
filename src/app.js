/**
 * -------------- IMPORTS / CONFIGS ----------------
 */
import './config/env.js';
import './config/passport.js';

import express from 'express';
import session from 'express-session';
import passport from 'passport';
import path from 'path';

import authRoutes from './routes/api/auth.js';
import cartRoutes from './routes/api/cart.js';
import productsRoutes from './routes/api/products.js';
import clientRoutes from './routes/client.js';

const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

/**
 * -------------- MIDDLEWARE ----------------
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve("src", "public")));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 24 * 60 * 60 * 1000 }, // 1 day in milliseconds
    })
);
app.use(passport.initialize());
app.use(passport.session());

/**
 * -------------- SERVER ROUTES ----------------
 */
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/products", productsRoutes);

/**
 * -------------- CLIENT ROUTES ----------------
 */
app.use("/", clientRoutes);

/**
 * -------------- GLOBAL ERROR HANDLING ----------------
 */
app.use((err, req, res, next) => {
    console.log(err);
});

/**
 * -------------- START APP ----------------
 */
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(
        `Server started on port ${process.env.PORT}. Please visit http://localhost:${PORT} to see your app.`
    );
    console.log("Press Ctrl + C to stop.");
});
