import express from "express";
import {
    getOrganizacion,
    getOrganizacionById,
    createOrganizacion,
    updateOrganizacion,
    deleteOrganizacion
} from "../controllers/OrganizacionController.js";

const router = express.Router();

router.get('/organizacion', getOrganizacion);
router.get('/organizacion/:idorganizacion', getOrganizacionById);
router.post('/organizacion', createOrganizacion);
router.patch('/organizacion/:idorganizacion',updateOrganizacion);
router.delete('/organizacion/:idorganizacion', deleteOrganizacion);

export default router;