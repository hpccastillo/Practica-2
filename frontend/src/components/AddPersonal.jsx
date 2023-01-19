import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPersonal = () => {
    const [cedula, setCedula] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido_1, setApellido_1] = useState("");
    const [apellido_2, setApellido_2] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [rol, setRol] = useState("");
    const [idorganizacion, setIdorganizacion] = useState("");
    const navigate = useNavigate();

     const savePersonal = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/personal", {
            cedula: cedula,
            nombre: nombre,
            apellido_1: apellido_1,
            apellido_2: apellido_2,
            telefono: telefono,
            email: email,
            rol: rol,
            idorganizacion: idorganizacion
        });
        navigate("/");
     }


  return (
    <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
        <form onSubmit={savePersonal} className='my-10'>
            <div className="flex flex-col">
            <div className="mb-5">
                    <label className="font-bold text-slate-700">cedula</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="cedula" value={cedula} onChange={(e)=>setCedula(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">nombre</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">apellido_1</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="apellido_1" value={apellido_1} onChange={(e)=> setApellido_1(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">apellido_2</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="apellido_2" value={apellido_2} onChange={(e)=>setApellido_2(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">telefono</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="telefono" value={telefono} onChange={(e)=>setTelefono(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">email</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">rol</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="rol" value={rol} onChange={(e)=>setRol(e.target.value)} />
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

export default AddPersonal