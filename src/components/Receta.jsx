import React, {useContext} from 'react';
import { ModalContext } from  '../context/ModalContext';

const Receta = ({receta}) => {

    const { strDrinkThumb, strDrink, idDrink} = receta;
    const { guardarIdReceta } = useContext(ModalContext);
    
    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>

                <img src={strDrinkThumb} alt={`Imagen de ${strDrink}`} className="card-imt-top"/>

                <div className="card-body">
                    <button className="btn btn-block btn-danger" type="button"
                        onClick={() => {
                            guardarIdReceta(idDrink)
                        }}
                    >Ver Bebida </button>
                </div>
            </div>
        </div>
     );
}
 
export default Receta;