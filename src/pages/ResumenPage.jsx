import React from 'react';
import ResumenProducto from '../components/ResumenProducto';
import useQuiosco from '../hooks/UseRestaurant';

const ResumePage = () => {
    const {pedido} = useQuiosco();
    console.log(pedido);

    return (
        <>
            <div className="mx-4">
            <h1 className='text-4xl font-black'>Resume</h1>  
           <p className='text-2xl my-10'>This is your order!</p> 
            {
            pedido.length === 0 ? (
            <p className='text-center text-2xl'>There are no items in your order</p> ) : 
            (pedido.map(product => (
                 <ResumenProducto 
                        key={product.id}
                       product={product}
                        />
                    ))
                 )
            }
            </div>
        </>
    );
};

export default ResumePage;