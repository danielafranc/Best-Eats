import { useState, useEffect} from "react";
import axios from 'axios'; 
import { categories, data } from "../data/data";
import { QuioscoContext } from "./QuioscoContext";
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import ModalJSX from "../components/Modal";



const datax =  data;


const QuioscoProvider = ({children}) => {
    // Lógica 

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [producto, setProducto ] = useState({});
    const [pedido, setPedido] = useState([]);
    const [modal, setModal] = useState(false);

    const handleSetProduct = (producto) => {
        setSelectedProduct(producto);
    }

    const handleAgregarPedido = ({categoriaId, ...producto}) => {
        if(pedido.some(productoState => productoState.id === producto.id)) {
           // Actualizar la cantidad
           const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
           setPedido(pedidoActualizado)
           toast.success('We saved your order successfully')
        } else {
            setPedido([...pedido, producto])
            toast.success('Your order has been saved!')
        }
        return pedido;
    }

    const handleModal = () => {
        setModal(!modal);
    }

    const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter( producto => producto.id === id)
        setSelectedProduct(productoActualizar[0])
        setModal(!modal)
    }


   


    
    const contextValue = {
        handleAgregarPedido, 
        pedido,
        producto,
        handleEditarCantidades,
        handleModal,
        modal, 
        handleSetProduct, 
        selectedProduct
    };
    

    
    return(
        <QuioscoContext.Provider value={contextValue}>
        {children}
        </QuioscoContext.Provider>
    )
}

export{ 

    QuioscoProvider
}
export default QuioscoContext