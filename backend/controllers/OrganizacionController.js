import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getOrganizacion = async (req, res) => {
    try {
        const response = await prisma.Organizacion.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getOrganizacionById = async (req, res) => {
    try {
        const response = await prisma.Organizacion.findUnique({
            where:{
                idorganizacion: Number (req.params.idorganizacion)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createOrganizacion = async (req, res) => {
    const {nombre, foto, descripcion, mision, vision, valores} = req.body;
    try {
        const Organizacion = await prisma.Organizacion.create({
            data:{
                nombre: nombre,
                foto: foto,
                descripcion: descripcion,
                mision: mision,
                vision: vision,
                valores: valores
            }
        });
        res.status(201).json(Organizacion);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateOrganizacion = async (req, res) => {
    const {nombre, foto, descripcion, mision, vision, valores} = req.body;
    try {
        const Organizacion = await prisma.Organizacion.update({
            where:{
                idorganizacion: Number(req.params.idorganizacion)
            },
            data:{
                nombre: nombre,
                foto: foto,
                descripcion: descripcion,
                mision: mision,
                vision: vision,
                valores: valores
            }
        });
        res.status(200).json(Organizacion);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }  
}

export const deleteOrganizacion = async (req, res) => {
    
    try {
        const Organizacion = await prisma.Organizacion.delete({
            where:{
                idorganizacion: Number(req.params.idorganizacion)
            }
        });
        res.status(200).json(Organizacion);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }   
}