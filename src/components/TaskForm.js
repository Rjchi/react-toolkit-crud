import { useState } from 'react';
import { useSelector } from 'react-redux'
// Aqui importamos el hook useDispach para llamar una funcion. (los hooks se ejecutan primero)
import { useDispatch } from 'react-redux'
// Importamos la funcion
import { addTask } from '../features/tasks/taskSlice'
// Importamos la funcion v4 para los ids
import { v4 as uuid} from 'uuid'


export const TaksForm = () => {
    const [task, setTask] = useState({
      title: "",
      description: ""
    });
    // funcion para disparar eventos desde nuestro taskSlice
    const dispatch = useDispatch()

    // Funcion para guardar lo que el usuario ingrese en el formulario
    // target es el elemento que dispara un evento
    const handleChange = (evento) => {
      // Y le indicamos que lea a partir de la propiedad name que tiene el formulario
      // console.log(evento.target.name, evento.target.value);
      setTask({
        // Con esto le decimos que si hay algun dato en task que lo copie
        ...task,
        // Y aqui lo que hacemos es que en el momento  que se ingresan datos en algun input (dependiendo de
        // la propiedad name) vamos a tomar el valor y agregarcelo a task y gracias ha esto estamos actualizando
        // el estado    (PARA VISUALIZARLO AGREGAR LA EXTENCION React Developer Tools)
        [evento.target.name]: evento.target.value,
      });
    };

    // Ejemplo de como desde cualquier componente  puedo acceder al stado que se encuentra en store
    // En caso de que se actualice el estado desde aqui se va a ver reflejado
    // en todos los demas componentes
    // const stateTask = useSelector(state => state.task)

    const handleSubmit = (evento) => {
      // Para que no se refresque la pagina
      evento.preventDefault();
      // Y mostramos la tarea que hay en el estado
      // console.log(task);

      // Para ejecutar la funcion se hace uso del useDispatch
      //dispatch(addTask(task)); // (Proxy es el state y type es el action (en consola) y payload son los parametros que le pasamos)
      dispatch(addTask({
        // hacemos una copia del objeto (state) y le añadimos una propiedad extra llamada id
        ...task,
        id: uuid(),
      }))
    }
    return (
      // Y aqui le decimos que cuando se de enviar ejecute esa funcion
    <form onSubmit={handleSubmit}>
      {/* Cuando alguien empiece a cambiar el valor mandamos la funcion */}
      <input name='title' type="text" placeholder='title' onChange={handleChange} />
      <textarea name="description" placeholder='description' onChange={handleChange}></textarea>
      <button>
        Save
      </button>
    </form>
  );
};
