// Aqui definimos las funciones
import { createSlice } from '@reduxjs/toolkit'


// Para no tener que desestructurar y tomar los reducers de este objeto, en la parte de abajo vamos a importar 
// por defecto sus reducer
export const taskSlice = createSlice({
    name: 'tasks',
    // Esta propiedad es el equivalente al valor inicial que se tiene en useState
    // Puede iniciar en lo que queramos
    initialState: [],
    // Los reducers son la forma en la que nosotros vamos a poder actualizar los estados (similar al setState)
    // dentro de ellos vamos a poder crear funciones para actualizar el estado (funciones para crud)
    reducers: {

    }
})

// Voy a exportar por defecto de taskSlice su reducer
export default taskSlice.reducer