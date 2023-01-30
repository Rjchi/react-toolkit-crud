// Redux es un manejador de estados lo que hace es manejar el estado de toda la aplicacion
// con esto cualquier componente puede acceder al estado (el estado estaria en un archivo aparte del resto de la aplicacion)
// ridux tiene lo que se conoce como el patron reducer

// 1- Para instalar ridux toolkit npm install @reduxjs/toolkit react-redux (librerias)
// 2- crear el Store (el lugar donde vamos a almacenar nuestros datos)

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
// Provider es un componente que va a contener toda nuestra aplicacion
import { Provider } from "react-redux";
// Ahora importamos el store para usarlo como parametro
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Esto es como asignarle un contexto a mi aplicación */}
    {/* Provider es un componente que va a contener toda nuestra aplicacion */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
