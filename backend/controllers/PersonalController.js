import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getPersonal = async (req, res) => {
    try {
        const response = await prisma.Personal.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getPersonalById = async (req, res) => {
    try {
        const response = await prisma.Personal.findUnique({
            where:{
                idpersonal: Number (req.params.idpersonal)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createPersonal = async (req, res) => {
    const {cedula, nombre, apellido_1, apellido_2, telefono, email, rol, idorganizacion} = req.body;
    try {
        const Personal = await prisma.Personal.create({
            data:{
                cedula: cedula,
                nombre: nombre,
                apellido_1: apellido_1,
                apellido_2: apellido_2,
                telefono: telefono,
                email: email,
                rol: rol,
                idorganizacion: idorganizacion
            }
        });
        res.status(201).json(Personal);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updatePersonal = async (req, res) => {
    const {cedula, nombre, apellido_1, apellido_2, telefono, email, rol, idorganizacion} = req.body;
    try {
        const Personal = await prisma.Personal.update({
            where:{
                idpersonal: Number(req.params.idpersonal)
            },
            data:{
                cedula: cedula,
                nombre: nombre,
                apellido_1: apellido_1,
                apellido_2: apellido_2,
                telefono: telefono,
                email: email,
                rol: rol,
                idorganizacion: idorganizacion
            }
        });
        res.status(200).json(Personal);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }  
}

export const deletePersonal = async (req, res) => {
    
    try {
        const Personal = await prisma.Personal.delete({
            where:{
                idpersonal: Number(req.params.idpersonal)
            }
        });
        res.status(200).json(Personal);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }   
}