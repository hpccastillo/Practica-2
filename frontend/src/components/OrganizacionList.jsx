import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSWR, {useSWRConfig} from "swr";

const OrganizacionctList = () => {
     const{mutate} = useSWRConfig ();
    const fetcher = async () =>{
        const response = await axios.get('http://localhost:5000/organizacion');
        return response.data;
    };

    const {data} = useSWR('organizacion', fetcher);
    if(!data) return <h2>Loading...</h2>;

    const deleteOrganizacion = async (productId) =>{
        await axios.delete(`http://localhost:5000/organizacion/${productId}`);
        mutate('organizacion')
    }

  return (
    <div className='flex flex-col mt-5'>
         <div className="w-full">
            <Link to="/add" className='bg-green-500 hover:bg-gray-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg'>Añadir Nueva Organización</Link>
            <div className="relative shadow rounded-lg mt-3">
                <table className='w-full text-sm text-left text-gray-500'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                        <tr>
                            <th className='py-3 px-1 text-center'>idorganizacion</th>
                            <th className='py-3 px-6'>nombre</th>
                            <th className='py-3 px-6'>foto</th>
                            <th className='py-3 px-6'>descripcion</th>
                            <th className='py-3 px-6'>mision</th>
                            <th className='py-3 px-6'>vision</th>
                            <th className='py-3 px-6'>valores</th>
                            <th className='py-3 px-1 text-center'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((Organizacion, index)=>(
                            <tr className='bg-white border-b' key={Organizacion.idorganizacion}>
                            <td className='py-3 px-1 text-center'>{index+1}</td>
                            <td className='py-3 px-6 font-medium text-gray-900'>{Organizacion.nombre}</td>
                            <td className='py-3 px-6'>{Organizacion.foto}</td>
                            <td className='py-3 px-6'>{Organizacion.descripcion}</td>
                            <td className='py-3 px-6'>{Organizacion.mision}</td>
                            <td className='py-3 px-6'>{Organizacion.vision}</td>
                            <td className='py-3 px-6'>{Organizacion.valores}</td>
                            <td className='py-3 px-1 text-center'>
                                <Link to={`/edit/${Organizacion.idorganizacion}`} className="font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1">Editar</Link>
                                <button onClick={() => deleteOrganizacion(Organizacion.idorganizacion)} className="font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white">Eliminar</button>
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

export default OrganizacionctList