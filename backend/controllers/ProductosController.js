import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getProductos = async (req, res) => {
    try {
        const response = await prisma.Productos.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProductosById = async (req, res) => {
    try {
        const response = await prisma.Productos.findUnique({
            where:{
                codigo: Number (req.params.codigo)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createProductos = async (req, res) => {
    const {nombre, descripcion, foto, idorganizacion} = req.body;
    try {
        const Productos = await prisma.Productos.create({
            data:{
                nombre: nombre,
                descripcion: descripcion,
                foto: foto,
                idorganizacion: idorganizacion
            }
        });
        res.status(201).json(Productos);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateProductos = async (req, res) => {
    const {nombre, descripcion, foto, idorganizacion} = req.body;
    try {
        const Productos = await prisma.Productos.update({
            where:{
                codigo: Number(req.params.codigo)
            },
            data:{
                nombre: nombre,
                descripcion: descripcion,
                foto: foto,
                idorganizacion: idorganizacion
            }
        });
        res.status(200).json(Productos);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }  
}

export const deleteProductos = async (req, res) => {
    
    try {
        const Productos = await prisma.Productos.delete({
            where:{
                codigo: Number(req.params.codigo)
            }
        });
        res.status(200).json(Productos);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }   
}