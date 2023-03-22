import React, {useState, useEffect, Fragment} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useQuiosco from '../hooks/UseRestaurant';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
  
  
  };

const ModalItem = ({name, desc, price, item}) => {

    const [cantidad, setCantidad] = useState(1);
    const {handleAgregarPedido, pedido, modal, handleModal, producto} = useQuiosco();
    const [edicion, setEdicion] = useState(false);

    useEffect(() => {
      //Comprobar si el Modal Actual esta en el pedido
      if(pedido.some((itemState) => itemState.id === item.id)){
      const itemEdicion =  pedido.find((pedidoState) => pedidoState.id === item.id);
      setEdicion(true);
      setCantidad(itemEdicion.cantidad);
    }
      
    }, [item, pedido]);


    return (
        <Fragment>
            <Box sx={style}>
            <p className="font-bold text-2xl mt-2 ">
            {name}
          </p>
          <p className='font-semibold text-xl mt-2'>
           ${price}
          </p>
          <p className='text-[18px] mt-2'>
           {desc}
          </p>
          
        <div className='flex gap-4 mt-5 items-center justify-center'>
        <Button onClick={() => { if(cantidad <= 1) return;
          setCantidad(cantidad - 1)}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </Button>

        <p>{cantidad}</p>

        <Button onClick={() => { if(cantidad >= 5) return;
          setCantidad(cantidad + 1)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </Button>
        </div>

        <button
         onClick={() => {
          handleAgregarPedido({...item, cantidad});
           handleModal()
          
        }}
         className='bg-indigo-600 px-5 py-2 mt-5 text-white font-bold uppercase rounded border-none flex justify-center m-auto hover:bg-indigo-700'>
          Add to my order
         </button>

            </Box>
       

                 
          </Fragment>
    );
};

export default ModalItem;