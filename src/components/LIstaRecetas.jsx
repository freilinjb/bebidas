import React, { useContext } from 'react';
import { RecetasContext } from '../context/RecetasContext';


const ListaRecetas = () => {

    //extraer las recetas
    const { recetas }  = useContext(RecetasContext);
    console.log(recetas);
    
    return ( 
        <div className="row mt-5">
            <h1>prueba</h1>
        </div>
     );
}
 
export default ListaRecetas;