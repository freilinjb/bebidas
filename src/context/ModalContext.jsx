import React, {createContext, useEffect, useState} from 'react';
import Axios from 'axios';

// Crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //state del provider
    const [idreceta, guardarIdReceta ] = useState(null);

    return ( 
        <ModalContext.Provider
            value={{
                guardarIdReceta
            }}    
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;