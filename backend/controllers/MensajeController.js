import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getMensaje = async (req, res) => {
    try {
        const response = await prisma.Mensaje.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getMensajeById = async (req, res) => {
    try {
        const response = await prisma.Mensaje.findUnique({
            where:{
                idmensaje: Number (req.params.idmensaje)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createMensaje = async (req, res) => {
    const {cuerpo, telefono, correo, asunto, nombre_remitente, idorganizacion} = req.body;
    try {
        const Mensaje = await prisma.Mensaje.create({
            data:{
                cuerpo: cuerpo,
                telefono: telefono,
                correo: correo,
                asunto: asunto,
                nombre_remitente: nombre_remitente,
                idorganizacion: idorganizacion
            }
        });
        res.status(201).json(Mensaje);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateMensaje = async (req, res) => {
    const {cuerpo, telefono, correo, asunto, nombre_remitente, idorganizacion} = req.body;
    try {
        const Mensaje = await prisma.Mensaje.update({
            where:{
                idmensaje: Number(req.params.idmensaje)
            },
            data:{
                cuerpo: cuerpo,
                telefono: telefono,
                correo: correo,
                asunto: asunto,
                nombre_remitente: nombre_remitente,
                idorganizacion: idorganizacion
            }
        });
        res.status(200).json(Mensaje);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }  
}

export const deleteMensaje = async (req, res) => {
    
    try {
        const Mensaje = await prisma.Mensaje.delete({
            where:{
                idmensaje: Number(req.params.idmensaje)
            }
        });
        res.status(200).json(Mensaje);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }   
}