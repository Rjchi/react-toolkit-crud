// Aqui definimos las funciones

import { createSlice } from "@reduxjs/toolkit";

// Estos objetos son para mostrar en la interfaz
const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "task 2 description",
    completed: false,
  },
];

// Para no tener que desestructurar y tomar los reducers de este objeto, en la parte de abajo vamos a importar
// por defecto sus reducer
export const taskSlice = createSlice({
  name: "tasks",
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
      state.push(action.payload);
      // y con esto hacemos lo mismo de arriba pero haciendo uso de buenas practicas en react,
      // porque en ridux si se puede utilizar (el de arriba)
      //[...state, action.payload]// Copiamos el estado y lo añadimos
    },
    // Aqui creamos el reducer que nos permite eliminar un registro
    // El state es para poder acceder al arreglo de tareas que tenemos actualmente
    // Y el action el dato que le voy a estar pasando
    deleteTask: (state, action) => {
      // Aqui mostramos el valor del action
      // console.log(action);
      // find para buscar la tarea sabiendo que el action tiene el id en su pyload
      const taskEncontrada = state.find((task) => task.id === action.payload);
      // Ahora si la tarea ha sido encontrada lo quitamos del arreglo
      if (taskEncontrada) {
        // El splice(indice, y la cantidad de elementos que quiero quitar)
        // Y con esto se actuliza el estado tambien
        state.splice(state.indexOf(taskEncontrada), 1);
      }
    },
    // reducer para actualizar una tarea de mi estado
    updateTask: (state, action) => {
        // Tomamos solo el id el titulo y la descripcion del payload (del objeto task) que biene en los parametros
        const { id, title, description } = action.payload;
        // Si la tarea es igual al id de la tarea que esta en el pyload entonces encontramos la tarea
        const tareaEncontrada = state.find((tarea) => tarea.id === id)
        // Si ha encontrado una tarea entonces actualizamela
        if (tareaEncontrada) {
          // La tarea en la propiedad title va ha ser igual a el title que bino por los parametros
          // Y con esto el estado se actualiza sin necesidad de crear un nuevo arreglo(para mostrar por pantalla)
          tareaEncontrada.title = title
          tareaEncontrada.description = description
        }
    },
  },
});
// Y tambien importamos las funciones del reducer individualmente
// y con esto desde cualquier parte podemos acceder a esta funcion
export const { addTask, deleteTask, updateTask } = taskSlice.actions;

// Voy a exportar por defecto de taskSlice su reducer
export default taskSlice.reducer;
