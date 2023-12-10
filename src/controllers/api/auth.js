import bcrypt from 'bcrypt';
import passport from 'passport';

import db from '../../config/db.js';

const signIn = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(400).send(info.message);

        req.logIn(user, (err) => {
            if (err) return next(err);
            //return res.status(200).send("Login successful.");
            return res.status(200).redirect("http://localhost:3000/")
        });
    })(req, res, next);
};

const signUp = async (req, res) => {
    const { username, password } = req.body;

    const existingUser = await db.collection("users").findOne({ username });
    if (existingUser) {
        return res
            .status(400)
            .send("Registration failed! Username is already taken.");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await db.collection("users").insertOne({
        username,
        password: hashedPassword,
        isAdmin: false,
    });

    await db.collection("carts").insertOne({
        username,
        cart: [],
    });

   //res.status(201).send("Registration successful.");
   res.status(201).redirect("http://localhost:3000/signin")
};

export { signIn, signUp };
