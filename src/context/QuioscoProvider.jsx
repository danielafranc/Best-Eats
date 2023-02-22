import { useState, useEffect, useCallback} from "react";
import axios from 'axios'; 
import { categories, data } from "../data/data";
import { QuioscoContext } from "./QuioscoContext";
import Modal from 'react-modal';


const datax =  data;


const QuioscoProvider = ({children}) => {
    // Lógica 

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [pedido, setPedido] = useState([]);

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

    const handleAgregarPedido = () => {
        console.log('agrengando...')
    }
    

    
    return(
        <QuioscoContext.Provider
        value={{
            data,
            categorias,
            categoriaActual,
            handleClickCategoria,
            handleAgregarPedido
        }}>
        {children}

        </QuioscoContext.Provider>
    )
}

export{ 

    QuioscoProvider
}
export default QuioscoContext