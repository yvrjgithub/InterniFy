import express from "express";
import isAuthenticated from "../middlewares/authenticated.js";
import {register,login,logout,updateProfile} from '../controllers/usercontroller.js'

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/profile/update').post(isAuthenticated,updateProfile);

export default router;

