import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import LIstaRecetas from './components/LIstaRecetas';

//cambio por Fargment porque el Context fluye los datos hacia abajo =
//la funcion hola esta disponible en todos los componentes
import CategoriaProvider from './context/CategoriasContext';

function App() {
  return (
    <CategoriaProvider>
        <Header/>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <Formulario/>
          </div>
          <LIstaRecetas/>
        </div>
    </CategoriaProvider>
  );
}

export default App;