// Aqui definimos las funciones

import { createSlice } from '@reduxjs/toolkit'

// Estos objetos son para mostrar en la interfaz
const initialState = [
    {
        id: "1",
        title: "task 1",
        description:"task 1 description",
        completed: false
    },
    {
        id: "2",
        title: "task 2",
        description:"task 2 description",
        completed: false
    }
]

// Para no tener que desestructurar y tomar los reducers de este objeto, en la parte de abajo vamos a importar 
// por defecto sus reducer
export const taskSlice = createSlice({
    name: 'tasks',
    // Esta propiedad es el equivalente al valor inicial que se tiene en useState
    // Puede iniciar en lo que queramos
    // initialState: [],
    initialState: initialState, // o initialState solo
    // Los reducers son la forma en la que nosotros vamos a poder actualizar los estados (similar al setState)
    // dentro de ellos vamos a poder crear funciones para actualizar el estado (funciones para crud)
    reducers: {
        // Deben ser escritas como propiedades en este caso es una funcion flecha que va a poder ser llamado
        // desde cualquier parte de la aplicacion
        addTask: (state, action) => {
            // Con esto accedemos al nombre del actiony tambien fucion para el pyload (los argumentos que se 
            // le pasaron en los inputs en este caso)
            // console.log(state, action.type);
            // Añadimos el objeto dentro del arreglo
            state.push(action.payload)
            // y con esto hacemos lo mismo de arriba pero haciendo uso de buenas practicas en react,
            // porque en ridux si se puede utilizar
            //[...state, action.payload]// Copiamos el estado y lo añadimos
        }
    }
})
// Y tambien importamos las funciones del reducer individualmente
// y con esto desde cualquier parte podemos acceder a esta funcion
export const { addTask } = taskSlice.actions

// Voy a exportar por defecto de taskSlice su reducer
export default taskSlice.reducer