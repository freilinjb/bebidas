import React, {createContext, useState, useEffect} from 'react';
import Axios from 'axios';

//Crear el Context //esto es la referencia al context
export const CategoriasContext = createContext();


//Provoder es donde se encuentra las funciones y state

const CategoriasProvider = (props) => {

    //crear el state del Context
    const [categorias, setCategorias] = useState([]);

    //ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

            const categorias = await Axios.get(url);

            setCategorias(categorias.data.drinks);
            
        }
        obtenerCategorias();
    },[]);
    //para que se ejecute una sola vez

    //hola estara disponible en todos los componentes pero setHola no
    return (
        <CategoriasContext.Provider value={{categorias}}>
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;