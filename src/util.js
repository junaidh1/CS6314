/**
 * -------------- MIDDLEWARE ----------------
 */
const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).send(
            "<h1>Unauthorized 401: You are not logged in.<h1>"
        );
    }
};

const isNotAuth = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/");
    }
};

const isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === "admin") {
        // NOTE: req.user.role depends on how the User model is defined in the database. ".role" is just an placeholder.
        next();
    } else {
        res.status(401).send("<h1>Unauthorized 401: You are not an admin.<h1>");
    }
};

export { isAdmin, isAuth, isNotAuth };
