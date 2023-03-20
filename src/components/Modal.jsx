import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useQuiosco from '../hooks/UseRestaurant';
import ModalItem from './ModalItem';

export  function ModalJSX(props) {

 
  const {item, open, handleClose} = props;
  const {modal} = useQuiosco();

  const [selectedItem, setSelectedItem] = useState(null);
  
  

  const handleSelected = (item) => {
    setSelectedItem(item.amount);
    setAmount(selectedItem + 1)

    console.log(amount, item)
  }

  return (
    <>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
       
        <ModalItem {...item} item={item}/>
      </Modal>
    </>
  );
}
export default ModalJSX
