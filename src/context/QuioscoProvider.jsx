import { useState, useEffect} from "react";
import { data } from "../data/data";
import { QuioscoContext } from "./QuioscoContext";
import { toast } from 'react-toastify';



const datax =  data;


const QuioscoProvider = ({children}) => {
    // Lógica 

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [producto, setProducto ] = useState({});
    const [pedido, setPedido] = useState([]);
    const [modal, setModal] = useState(false);
    const [nombre, setNombre] = useState('');
    const [total, setTotal] = useState(0);

    //Calculate the total of the order
    

    //SetProduct that will be shown at modal
    const handleSetProduct = (producto) => {
        setSelectedProduct(producto);
    };

    //Add products to order
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
    };

    //Function that will open the modal globally
    const handleModal = () => {
        setModal(!modal);
    };

    // Function that allows to edit amounts
    const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter( producto => producto.id === id)
        setSelectedProduct(productoActualizar[0])
        setModal(!modal)
    };

    // Function to erase a product from pedido
    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
    };
    
    // This function sends the order 
    const colocarOrden = async e => {
        e.preventDefault();
        toast.success('Your order has been sent to be prepared!')

        console.log("Enviando orden...")
    };
    
    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.price * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido]);
    
    const contextValue = {
        handleAgregarPedido, 
        pedido,
        producto,
        handleEditarCantidades,
        handleModal,
        modal, 
        handleSetProduct, 
        selectedProduct,
        handleEliminarProducto, 
        nombre,  
        setNombre, 
        colocarOrden, 
        total
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