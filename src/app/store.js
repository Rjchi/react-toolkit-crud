// configureStore lo que hace es devolvernos un objeto y dentro de este
// agrupa todos los archivos o datos para poder accederlos desde cualquier lugar

import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/tasks/taskSlice'

// Es como definir un useState por aparte de la aplicacion
// Lo exportamos individualmente
export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    }
})