import React, {createContext, useState, useEffect} from 'react';
export const RecetasContext = createContext();
import Axios from 'axios';

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([])
    const [buscarRecetas, setBuscarRecetas] = useState({
        nombre:'',
        categoria:'',
    });

    const [consultar, setGuardarConsultas] = useEffect(false);
    
    const { nombre, categoria } = busqueda;

    useEffect(() =>     {
        const usrl = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

    }, [buscarRecetas]);
    return (
        <RecetasContext.Provider value={{
            recetas,
            buscarRecetas,
            setBuscarRecetas
        }}>
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;