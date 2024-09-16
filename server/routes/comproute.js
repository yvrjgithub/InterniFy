import express from "express";
import isAuthenticated from "../middlewares/authenticated.js";
import { registerCompany,getCompany,getCompanyById,updateCompany } from "../controllers/compcontroller.js";

const router = express.Router();

router.route('/register').post(isAuthenticated,registerCompany);
router.route('/get').get(isAuthenticated, getCompany);
router.route('/get/:id').get(isAuthenticated, getCompanyById);
router.route('/update/:id').put(isAuthenticated,updateCompany);

export default router;