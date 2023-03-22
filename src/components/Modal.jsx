import React, {useState, useEffect} from 'react';
import Modal from '@mui/material/Modal';
import useQuiosco from '../hooks/UseRestaurant';
import ModalItem from './ModalItem';

export  function ModalJSX(props) {

 
  const {item, open, handleClose} = props;
  const {modal} = useQuiosco();
  


  return (
    <>
    <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          {/* Here I keep my component wrapped in a div because otherwise it will throw an erro */}
       <div>
       <ModalItem {...item} item={item}/>
       </div>
      </Modal>
      
    </>
  );
}
export default ModalJSX
