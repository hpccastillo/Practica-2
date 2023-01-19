import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSWR, {useSWRConfig} from "swr";

const MensajectList = () => {
     const{mutate} = useSWRConfig ();
    const fetcher = async () =>{
        const response = await axios.get('http://localhost:5000/mensaje');
        return response.data;
    };

    const {data} = useSWR('mensaje', fetcher);
    if(!data) return <h2>Loading...</h2>;

    const deleteMensaje = async (productId) =>{
        await axios.delete(`http://localhost:5000/mensaje/${productId}`);
        mutate('mensaje')
    }

  return (
    <div className='flex flex-col mt-5'>
         <div className="w-full">
            <Link to="/add" className='bg-green-500 hover:bg-gray-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg'>Añadir Nuevo mensaje</Link>
            <div className="relative shadow rounded-lg mt-3">
                <table className='w-full text-sm text-left text-gray-500'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                        <tr>
                            <th className='py-3 px-1 text-center'>idmensaje</th>
                            <th className='py-3 px-6'>cuerpo</th>
                            <th className='py-3 px-6'>telefono</th>
                            <th className='py-3 px-6'>correo</th>
                            <th className='py-3 px-6'>asunto</th>
                            <th className='py-3 px-6'>nombre_remitente</th>
                            <th className='py-3 px-6'>idorganizacion</th>
                            <th className='py-3 px-1 text-center'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((Mensaje, index)=>(
                            <tr className='bg-white border-b' key={Mensaje.idmensaje}>
                            <td className='py-3 px-1 text-center'>{index+1}</td>
                            <td className='py-3 px-6 font-medium text-gray-900'>{Mensaje.cuerpo}</td>
                            <td className='py-3 px-6'>{Mensaje.telefono}</td>
                            <td className='py-3 px-6'>{Mensaje.correo}</td>
                            <td className='py-3 px-6'>{Mensaje.asunto}</td>
                            <td className='py-3 px-6'>{Mensaje.nombre_remitente}</td>
                            <td className='py-3 px-6'>{Mensaje.idorganizacion}</td>
                            <td className='py-3 px-1 text-center'>
                                <Link to={`/edit/${Mensaje.idmensaje}`} className="font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1">Editar</Link>
                                <button onClick={() => deleteMensaje(Mensaje.idmensaje)} className="font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white">Eliminar</button>
                            </td>
                        </tr>
                        ))}

                        
                    </tbody>
                </table>
            </div>
         </div>
    </div>
  )
}

export default MensajectList