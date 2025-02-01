import { formatearDinero } from '../helpers';
import useQuiosco from '../hooks/useQuiosco';
export default function Producto({producto}) {
    const {nombre, imagen, precio} = producto;
    const { handleClickModal, handleSetProducto } = useQuiosco();
    return (
        <div className="border p-3 shadow bg-white">
            <img 
                src={`/img/${imagen}.jpg`} 
                alt={`imagen ${nombre}`}
                className="w-full" 
            />
            <div className="p-5">
                <h3 className="text-xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{ formatearDinero(precio) }</p>
                <button
                    type='button'
                    className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'
                    onClick={() => {
                        handleClickModal();
                        handleSetProducto(producto);
                    }}
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}
