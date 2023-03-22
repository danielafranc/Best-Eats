import React, {useState, useEffect, Fragment}  from 'react';
import useQuiosco from '../hooks/UseRestaurant'
import ModalJSX from './Modal';


const ResumenProducto = ({product}) => {
    const {handleEditarCantidades, modal, handleModal, handleEliminarProducto, selectedProduct, pedido} = useQuiosco();
    const [cantidad, setCantidad] = useState(1);

    const subTotal = (price, amount) => {
        return price * amount;
    }
 
 

    return(
        <Fragment>
        <div className='rounded-lg shadow-lg p-5 mb-3 flex gap-10 items-center'>
            <div className='flex'>
                <img src={product.image} alt={product.name} className=" flex w-[300px] h-[300px] object-cover" />
            </div>
        
        <div>
            <p className='font-bold text-3xl'>{product.name}</p>
            <p className='text-2xl font-bold mt-2'>Amount: {product.cantidad}</p>
            <p className='text-xl font-bold mt-2 '>Price: ${product.price}</p>
            <p className='text-lg font-semibold text-gray mt-2 text-gray-700'>Subtotal: ${subTotal(product.price, product.cantidad)} </p>
        </div>  
        <div className="ml-auto">
            <button 
          className="bg-sky-700 flex gap-2  py-2 text-white rounded-md font-bold uppercase shadow-md w-full text-center"
          onClick={() => { handleEditarCantidades(product.id)}}
            >Editar</button>
            {
                selectedProduct && (
                    <ModalJSX  item={selectedProduct} open={modal} handleClose={handleModal}/>
                )
            }
            <button
            onClick={() => handleEliminarProducto(product.id)}
            className="bg-red-700 flex gap-2  px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full text-center mt-3"            >Eliminar</button>
        </div>
        </div>
        </Fragment>
    );
};

export default ResumenProducto;