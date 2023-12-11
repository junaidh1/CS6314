/**
 * -------------- MIDDLEWARE ----------------
 */
const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/signin");
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
    if (req.isAuthenticated() && req.user.isAdmin === true) {
        next();
    } else {
        res.status(401).send("<h1>Unauthorized 401: You are not an admin.<h1>");
    }
};

export { isAdmin, isAuth, isNotAuth };
