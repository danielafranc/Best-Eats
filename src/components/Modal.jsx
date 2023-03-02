import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useQuiosco from '../hooks/UseRestaurant';
import data from '../data/data';

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

export  function ModalJSX(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {handleAgregarPedido, pedido} = useQuiosco();
  const producto = props.item;

  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
    //Comprobar si el Modal Actual esta en el pedido
    if(pedido.some((pedidoState) => pedidoState.id === producto.id)){
    const productoEdicion =  pedido.find((pedidoState) => pedidoState.id === producto.id);
    setEdicion(true);
    setCantidad(productoEdicion.cantidad);
  }
    
  }, [producto, pedido]);

  return (
    <div>
      <Button onClick={handleOpen}>Add to cart</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="font-bold text-2xl mt-2 ">
            {props.name}
          </p>
          <p className='font-semibold text-xl mt-2'>
           ${props.price}
          </p>
          <p className='text-[18px] mt-2'>
           {props.desc}
          </p>
            
          <div className='flex gap-4 mt-5 items-center justify-center'>

          <Button 
          onClick={() => {if(cantidad <= 1) return;
            setCantidad(cantidad - 1)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </Button> 
          
          <Typography>
            {cantidad}
          </Typography>

          <Button onClick={() => {
            if(cantidad >= 5) return;
            setCantidad(cantidad + 1)}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </Button>  
          </div>
         
         <button
         onClick={() => {
          handleAgregarPedido({...pedido, cantidad, ...producto})
          if(!edicion){
            handleClose(true)
          }
        }}
         className='bg-indigo-600 px-5 py-2 mt-5 text-white font-bold uppercase rounded border-none flex justify-center m-auto hover:bg-indigo-700'>
          Add to my order
         </button>
         
        </Box>
      </Modal>
    </div>
  );
}
export default ModalJSX