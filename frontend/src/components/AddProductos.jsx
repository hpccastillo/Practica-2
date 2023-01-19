import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProductos = () => {
     const [nombre, setNombre] = useState("");
     const [descripcion, setDescripcion] = useState("");
     const [foto, setFoto] = useState("");
     const [idorganizacion, setIdorganizacion] = useState("");
     const navigate = useNavigate();

     const saveProductos = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/productos", {
            nombre: nombre, 
            descripcion: descripcion,
            foto: foto,
            idorganizacion: idorganizacion
        });
        navigate("/");
     }


  return (
    <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
        <form onSubmit={saveProductos} className='my-10'>
            <div className="flex flex-col">
                <div className="mb-5">
                    <label className="font-bold text-slate-700">nombre</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">descripcion</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="descripcion" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">foto</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="foto" value={foto} onChange={(e)=>setFoto(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">idorganizacion</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="idorganizacion" value={idorganizacion} onChange={(e)=>setIdorganizacion(e.target.value)} />
                </div>
                <button type='submit' className='w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow'>Guardar</button>
            </div>
        </form>     
    </div>
      
  )
}

export default AddProductos