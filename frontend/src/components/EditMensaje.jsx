import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditMensaje = () => {
    const [cuerpo, setCuerpo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [asunto, setAsunto] = useState("");
    const [nombre_remitente, setNombre_remitente] = useState("");
    const [idorganizacion, setIdorganizacion] = useState("");
     const navigate = useNavigate();
     const {idmensaje} = useParams();

     useEffect(()=>{
        const getMensajeById = async () =>{
            const response = await axios.get(`http://localhost:5000/mensaje/${idmensaje}`);
            setCuerpo(response.data.cuerpo);
            setTelefono(response.data.telefono);
            setCorreo(response.data.correo);
            setAsunto(response.data.asunto);
            setNombre_remitente(response.data.nombre_remitente);
            setIdorganizacion(response.data.idorganizacion)
        };
        getMensajeById();
     },[idmensaje]);

     const updateMensaje = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/mensaje/${idmensaje}`, {
            cuerpo: cuerpo,
            telefono: telefono,
            correo: correo,
            asunto: asunto,
            nombre_remitente: nombre_remitente,
            idorganizacion: idorganizacion
        });
        navigate("/");
     }


  return (
    <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
        <form onSubmit={updateMensaje} className='my-10'>
            <div className="flex flex-col">
            <div className="mb-5">
                    <label className="font-bold text-slate-700">nombre</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="cuerpo" value={cuerpo} onChange={(e)=>setCuerpo(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">cuerpo</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="cuerpo" value={cuerpo} onChange={(e)=>setCuerpo(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">telefono</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="telefono" value={telefono} onChange={(e)=>setTelefono(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">correo</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="correo" value={correo} onChange={(e)=>setCorreo(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">asunto</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="asunto" value={asunto} onChange={(e)=>setAsunto(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">nombre_remitente</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="nombre_remitente" value={nombre_remitente} onChange={(e)=>setNombre_remitente(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">idorganizacion</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="idorganizacion" value={idorganizacion} onChange={(e)=>setIdorganizacion(e.target.value)} />
                </div>
                <button type='submit' className='w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow'>Actualización</button>
            </div>
        </form>     
    </div>
      
  )
}

export default EditMensaje;