import React from 'react';

const Receta = ({receta}) => {
    
    const { strDrinkThumb, strDrink} = receta;

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>

                <img src={strDrinkThumb} alt={`Imagen de ${strDrink}`} className="card-imt-top"/>

                <div className="card-body">
                    <button className="btn btn-block btn-danger" type="button">Ver Bebida </button>
                </div>
            </div>
        </div>
     );
}
 
export default Receta;