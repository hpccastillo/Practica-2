import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSWR, {useSWRConfig} from "swr";

const ProductosList = () => {
     const{mutate} = useSWRConfig ();
    const fetcher = async () =>{
        const response = await axios.get('http://localhost:5000/productos');
        return response.data;
    };

    const {data} = useSWR('productos', fetcher);
    if(!data) return <h2>Loading...</h2>;

    const deleteProductos = async (productId) =>{
        await axios.delete(`http://localhost:5000/productos/${productId}`);
        mutate('productos')
    }

  return (
    <div className='flex flex-col mt-5'>
         <div className="w-full">
            <Link to="/add" className='bg-green-500 hover:bg-gray-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg'>Añadir Nuevo Producto</Link>
            <div className="relative shadow rounded-lg mt-3">
                <table className='w-full text-sm text-left text-gray-500'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                        <tr>
                            <th className='py-3 px-1 text-center'>codigo</th>
                            <th className='py-3 px-6'>nombre</th>
                            <th className='py-3 px-6'>descripcion</th>
                            <th className='py-3 px-6'>foto</th>
                            <th className='py-3 px-6'>idorganizacion</th>
                            <th className='py-3 px-1 text-center'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((Productos, index)=>(
                            <tr className='bg-white border-b' key={Productos.codigo}>
                            <td className='py-3 px-1 text-center'>{index+1}</td>
                            <td className='py-3 px-6 font-medium text-gray-900'>{Productos.nombre}</td>
                            <td className='py-3 px-6'>{Productos.descripcion}</td>
                            <td className='py-3 px-6'>{Productos.foto}</td>
                            <td className='py-3 px-6'>{Productos.idorganizacion}</td>
                            <td className='py-3 px-1 text-center'>
                                <Link to={`/edit/${Productos.codigo}`} className="font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1">Editar</Link>
                                <button onClick={() => deleteProductos(Productos.codigo)} className="font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white">Eliminar</button>
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

export default ProductosList