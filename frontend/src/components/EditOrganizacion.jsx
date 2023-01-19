import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditOrganizacion = () => {
     const [nombre, setNombre] = useState("");
     const [foto, setFoto] = useState("");
     const [descripcion, setDescripcion] = useState("");
     const [mision, setMision] = useState("");
     const [vision, setVision] = useState("");
     const [valores, setValores] = useState("");
     const navigate = useNavigate();
     const {idorganizacion} = useParams();

     useEffect(()=>{
        const getProductById = async () =>{
            const response = await axios.get(`http://localhost:5000/organizacion/${idorganizacion}`);
            setNombre(response.data.nombre);
            setFoto(response.data.foto);
            setDescripcion(response.data.descripcion);
            setMision(response.data.mision);
            setVision(response.data.vision);
            setValores(response.data.valores)
        };
        getProductById();
     },[idorganizacion]);

     const updateOrganizacion = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/organizacion/${idorganizacion}`, {
            nombre: nombre,
            foto: foto,
            descripcion: descripcion,
            mision: mision,
            vision: vision,
            valores: valores
        });
        navigate("/");
     }


  return (
    <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
        <form onSubmit={updateOrganizacion} className='my-10'>
            <div className="flex flex-col">
                <div className="mb-5">
                    <label className="font-bold text-slate-700">nombre</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">foto</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="foto" value={foto} onChange={(e)=>setFoto(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">descripcion</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="descripcion" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">mision</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="mision" value={mision} onChange={(e)=>setMision(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">vision</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="vision" value={vision} onChange={(e)=>setVision(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">valores</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="valores" value={valores} onChange={(e)=>setValores(e.target.value)} />
                </div>
                <button type='submit' className='w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow'>Actualización</button>
            </div>
        </form>     
    </div>
      
  )
}

export default EditOrganizacion;