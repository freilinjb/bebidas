import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import LIstaRecetas from './components/LIstaRecetas';

//cambio por Fargment porque el Context fluye los datos hacia abajo =
//la funcion hola esta disponible en todos los componentes
import CategoriaProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriaProvider>
      <RecetasProvider>
        <ModalProvider>
        <Header/>

          <div className="container mt-5">
            <div className="row justify-content-center">
              <Formulario/>
            </div>
            <LIstaRecetas/>
          </div>

        </ModalProvider>
      </RecetasProvider>
    </CategoriaProvider>
  );
}

export default App;