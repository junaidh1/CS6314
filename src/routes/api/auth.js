import express from 'express';

import {
    signIn,
    signUp,
} from '../../controllers/api/auth.js';

const router = express.Router();

router.post("/signin", signIn); // Non-user route

router.post("/signup", signUp); // Non-user route

export default router;
