import React, {useContext , useState}   from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    //state local no fluye por ningun lado
    const [busqueda, setBusqueda ] = useState({
        nombre: '',
        categoria:''
    });

    //toma el context para tener disponible todo lo que este en el value
    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas } = useContext(RecetasContext);

    //funcion para leer los contenidos
    const obtenerDatosReceta = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    return ( 
        <form onSubmit={ e=> {
            e.preventDefault(); 
            buscarRecetas(busqueda);
        }}>
            <fieldset className="text-center">
                <legend>Buscar bebidas por Categorias o Ingredientes </legend>
            </fieldset>
 
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                      <input type="text" name="nombre" className="form-control" placeholder="Buscar por Ingrediente" onChange={obtenerDatosReceta}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                       <select className="form-control" name="categoria" onChange={obtenerDatosReceta}>
                        <option value="">--Selecciona Categoria--</option>
                        {categorias.map(categoria => (
                            <option 
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                      </select>
                    </div>
                </div>
                <div className="col-md-4">
                    <input type="submit" className="btn btn-block btn-primary" value="Buscar Recetas"/>
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;