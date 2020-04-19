import React, {createContext, useState, useEffect} from 'react';
import Axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([])
    const [buscarRecetas, setBuscarRecetas] = useState({
        nombre:'',
        categoria:'',
    });

    const [consultar, setGuardarConsultas] = useEffect(false);
    
    const { nombre, categoria } = buscarRecetas;

    useEffect(() =>     {

        if(consultar) {
            const obtenerRecetas = async () => {
                const url = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                
                console.log(url);
            }

            obtenerRecetas();
        }

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