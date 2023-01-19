import express from "express";
import {
    getPersonal,
    getPersonalById,
    createPersonal,
    updatePersonal,
    deletePersonal
} from "../controllers/PersonalController.js";

const router = express.Router();

router.get('/personal', getPersonal);
router.get('/personal/:idpersonal', getPersonalById);
router.post('/personal', createPersonal);
router.patch('/personal/:idpersonal', updatePersonal);
router.delete('/personal/:idpersonal', deletePersonal);

export default router;