// Redux es un manejador de estados lo que hace es manejar el estado de toda la aplicacion
// con esto cualquier componente puede acceder al estado (el estado estaria en un archivo aparte del resto de la aplicacion)
// ridux tiene lo que se conoce como el patron reducer

// 1- Para instalar ridux toolkit npm install @reduxjs/toolkit react-redux (librerias)
// 2- crear el Store (el lugar donde vamos a almacenar nuestros datos)
// 3- instalar la extencion Ridux DevTools y React Developer Tools (en el navegador)
// 4- instalar una libreria llamada uuid npm i uuid para generar ids unicos basada en un estandar
// 5- instalar otra libreria llamada npm install react-router-dom para gestionar las rutas
// 5.5 - A continuacion instalamos un framework para estilizar nuestra aplicacion
// 6- instalar npm install -D tailwindcss para el css del proyecto y tambien ejecuto npx tailwindcss init
// 7- En el archivo tailwind poner en content "./src/**/*.{js,jsx,ts,tsx}",  |ver doc (https://tailwindcss.com/)
// 8- Agregar en el index.css @tailwind base; @tailwind components; @tailwind utilities; uno abajo del otro




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
