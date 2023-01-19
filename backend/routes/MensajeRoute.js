import express from "express";
import {
    getMensaje,
    getMensajeById,
    createMensaje,
    updateMensaje,
    deleteMensaje
} from "../controllers/MensajeController.js";

const router = express.Router();

router.get('/mensaje', getMensaje);
router.get('/mensaje/:idmensaje', getMensajeById);
router.post('/mensaje', createMensaje);
router.patch('/mensaje/:idmensaje', updateMensaje);
router.delete('/mensaje/:idmensaje', deleteMensaje);

export default router;