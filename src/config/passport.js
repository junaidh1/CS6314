import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import db from './db.js';

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await db.collection("users").findOne({ username });
            if (!user) {
                return done(null, false, {
                    message: "Username not found.",
                });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return done(null, false, {
                    message: "Incorrect password.",
                });
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await db
            .collection("users")
            .findOne({ _id: new ObjectId(id) });
        done(null, user);
    } catch (err) {
        done(err);
    }
});
