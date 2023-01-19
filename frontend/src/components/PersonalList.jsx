import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSWR, {useSWRConfig} from "swr";

const PersonalList = () => {
     const{mutate} = useSWRConfig ();
    const fetcher = async () =>{
        const response = await axios.get('http://localhost:5000/personal');
        return response.data;
    };

    const {data} = useSWR('personal', fetcher);
    if(!data) return <h2>Loading...</h2>;

    const deletePersonal = async (personalId) =>{
        await axios.delete(`http://localhost:5000/personal/${personalId}`);
        mutate('personal')
    }

  return (
    <div className='flex flex-col mt-5'>
         <div className="w-full">
            <Link to="/add" className='bg-green-500 hover:bg-gray-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg'>Añadir Nuevo Personal</Link>
            <div className="relative shadow rounded-lg mt-3">
                <table className='w-full text-sm text-left text-gray-500'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                        <tr>
                            <th className='py-3 px-1 text-center'>idpersonal</th>
                            <th className='py-3 px-6'>cedula</th>
                            <th className='py-3 px-6'>nombre</th>
                            <th className='py-3 px-6'>apellido_1</th>
                            <th className='py-3 px-6'>apellido_2</th>
                            <th className='py-3 px-6'>telefono</th>
                            <th className='py-3 px-6'>email</th>
                            <th className='py-3 px-6'>rol</th>
                            <th className='py-3 px-6'>idorganizacion</th>
                            <th className='py-3 px-1 text-center'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((Personal, index)=>(
                            <tr className='bg-white border-b' key={Personal.idpersonal}>
                            <td className='py-3 px-1 text-center'>{index+1}</td>
                            <td className='py-3 px-6 font-medium text-gray-900'>{Personal.cedula}</td>
                            <td className='py-3 px-6'>{Personal.nombre}</td>
                            <td className='py-3 px-6'>{Personal.apellido_1}</td>
                            <td className='py-3 px-6'>{Personal.apellido_2}</td>
                            <td className='py-3 px-6'>{Personal.telefono}</td>
                            <td className='py-3 px-6'>{Personal.email}</td>
                            <td className='py-3 px-6'>{Personal.rol}</td>
                            <td className='py-3 px-6'>{Personal.idorganizacion}</td>
                            <td className='py-3 px-1 text-center'>
                                <Link to={`/edit/${Personal.idpersonal}`} className="font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1">Editar</Link>
                                <button onClick={() => deletePersonal(Personal.idpersonal)} className="font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white">Eliminar</button>
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

export default PersonalList