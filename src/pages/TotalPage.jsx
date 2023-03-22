import React, {useEffect, useCallback} from 'react';
import { ToastContainer } from 'react-toastify';
import useQuiosco from '../hooks/UseRestaurant';



const TotalPage = () => {

    const {pedido, nombre, setNombre, colocarOrden, total} = useQuiosco(); 
// if the pedido array changes, the comprobarPedido function will be redefined with the updated value of pedido
    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === "" || nombre.length < 3;
    }, [pedido, nombre]); // <= That will make the function only execute once 'pedido' changes


    //This will make the function be called every time pedido, o comprobar pedido cambien
    useEffect(() => {
        comprobarPedido();
    }, [pedido, comprobarPedido()]);

    console.log(total);

    return (
        <>
        <div className="mx-4 flex justify-center">
            <div className='rounded-xl p-10 flex justify-center flex-col w-[100%] lg:w-[70%] shadow-2xl '>
            <h1 className='text-4xl font-black'>Total</h1>  
        <p className='text-2xl mt-6 mb-2'>Confirm your order</p> 
        <hr />
        <form onSubmit={colocarOrden} className="mt-6">
            <div>
                <label 
                htmlFor='nombre'
                className='block text-slate-700 font-bold text-xl'>
                Your name here
                </label>

                <input
                id="nombre" 
                type="text"
                value={nombre}
                onChange={ (e) => setNombre(e.target.value)}
                className='bg-gray-200 w-full lg:w-1/2 mt-3 p-2 rounded'
                 />

            </div>
        <div className="mt-10">
            <p className='text-2xl'>
                Your total is: {''} <span className='font-bold'>${total}</span> 
            </p>
        </div>
        
        <div className='mt-5'>
        <input
        type="submit"
        className={`${comprobarPedido() 
            ? 'bg-indigo-100' 
            : 'bg-indigo-600 hover:bg-indigo-800'} 
            w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white mt-2 text-center sm:text-left `}
        value="Confirmar pedido"
        disabled={comprobarPedido()}
        />
        <ToastContainer/>
        </div>

        </form>
            </div>
        </div>
        </>
    );
};

export default TotalPage;