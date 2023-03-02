import React from 'react';


const ResumenProducto = ({product}) => {

    const subTotal = (price, amount) => {
        return price * amount;
    }

    return (
        <div className='shadow p-5 mb-3 flex gap-10 items-center'>
            <div className='flex'>
                <img src={product.image} alt={product.image} className=" flex w-[300px] h-[300px] object-cover" />
            </div>
        
        <div>
            <p className='font-bold text-3xl'>{product.name}</p>
            <p className='text-2xl font-bold mt-2'>Amount: {product.cantidad}</p>
            <p className='text-xl font-bold mt-2 '>Price: {product.price}</p>
            <p className='text-lg font-semibold text-gray mt-2 text-gray-700'>Subtotal: {subTotal(product.price, product.cantidad)} </p>
        </div>  
        </div>
    );
};

export default ResumenProducto;