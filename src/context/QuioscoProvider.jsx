import { useState, useEffect} from "react";
import axios from 'axios'; 
import { categories, data } from "../data/data";
import { QuioscoContext } from "./QuioscoContext";
import Modal from 'react-modal';
import { toast } from 'react-toastify';



const datax =  data;


const QuioscoProvider = ({children}) => {
    // Lógica 

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [producto, setProducto ] = useState({});
    const [pedido, setPedido] = useState([]);
    const [modal, setModal] = useState(true);



    const obtenerCategorias = async () => { 
        setCategorias(data)
    }

    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = (id) => {
        const categorias = categorias.filter( cat => cat.id === id)
        setCategoriaActial(categoria[0])
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId, ...producto}) => {
        if(pedido.some(productoState => productoState.id === producto.id)) {
           // Actualizar la cantidad
           const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
           setPedido(pedidoActualizado)
           toast.success('Agregamos tu pedido exitosamente')
        } else {
            setPedido([...pedido, producto])
            toast.success('Guardamos tu pedido')
        }
        return pedido;
    }

    
    

    
    return(
        <QuioscoContext.Provider
        value={{
            data,
            categorias,
            categoriaActual,
            handleClickCategoria,
            handleAgregarPedido, 
            pedido,
            producto,
            handleSetProducto,
        }}>
        {children}
        </QuioscoContext.Provider>
    )
}

export{ 

    QuioscoProvider
}
export default QuioscoContext