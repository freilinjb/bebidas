import React, {createContext, useEffect, useState} from 'react';
import Axios from 'axios';

// Crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //state del provider
    const [idreceta, guardarIdReceta ] = useState(null);
    const [informacion, guardarReceta] = useState({});

    //una vez que tenemos una receta, llamar a la API
    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idreceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

            const resultado = await Axios.get(url);
            // console.log(resultado.data.drinks[0]);
            guardarReceta(resultado.data.drinks[0]);
            
             
        }
        obtenerReceta();
    },[idreceta]);

    return ( 
        <ModalContext.Provider
            value={{
                informacion,
                guardarReceta,
                guardarIdReceta
            }}    
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;