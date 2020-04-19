import React,{ createContext, useState, useEffect} from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {


    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        nombre:'',
        categoria:''
    });
    const [consultar, guardarConsultar] = useState(false);

    const { nombre, categoria } = busqueda;

    useEffect(() => {
        //verifica que se preciono el boton 
        if(consultar) {
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                console.log(url); 
            }
            obtenerRecetas();
        }
        //se  ejecuta cada vez que cambie la busqueda
    },[busqueda]);

    return ( 
        <RecetasContext.Provider
            value={{buscarRecetas,guardarConsultar}} >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;
