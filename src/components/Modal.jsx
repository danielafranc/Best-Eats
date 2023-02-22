import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useQuiosco from '../hooks/UseRestaurant';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export  function ModalJSX(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [counter, setCounter] = useState(1);
  const {handleAgregarPedido} = useQuiosco();

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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {props.price}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {props.desc}
          </Typography>
            
          <div className='flex gap-4 mt-5 items-center justify-center'>

          <Button onClick={() => {
            if(counter <= 1) return;
            setCounter(counter - 1)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </Button> 
          
          <Typography>
            {counter}
          </Typography>

          <Button onClick={() => {
            if(counter >= 5) return;
            setCounter(counter + 1)}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </Button>  
          </div>
         
         <button
         onClick={() => handleAgregarPedido()}
         className='bg-indigo-600 px-5 py-2 mt-5 text-white font-bold uppercase rounded border-none flex justify-center m-auto hover:bg-indigo-700'>
          Añadir al pedido
         </button>
         
        </Box>
      </Modal>
    </div>
  );
}
export default ModalJSX