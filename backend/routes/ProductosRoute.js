import express from "express";
import {
    getProductos,
    getProductosById,
    createProductos,
    updateProductos,
    deleteProductos
} from "../controllers/ProductosController.js";

const router = express.Router();

router.get('/productos', getProductos);
router.get('/productos/:codigo', getProductosById);
router.post('/productos', createProductos);
router.patch('/productos/:codigo', updateProductos);
router.delete('/productos/:codigo', deleteProductos);

export default router;