import { useEffect, useState } from "react";
// Use selector para traer el arreglo de tareas del estado (en este caso)
import { useSelector } from "react-redux";
// Aqui importamos el hook useDispach para llamar una funcion. (los hooks se ejecutan primero)
import { useDispatch } from "react-redux";
// Importamos la funcion
import { addTask, updateTask } from "../features/tasks/taskSlice";
// Importamos la funcion v4 para los ids
import { v4 as uuid } from "uuid";
// Este Hook es para que nos redireccione a la pagina en donde tenemos listadas las tareas
import { useNavigate } from "react-router-dom";
// Este Hook es para leer los parametros que van cambiando en la url del navegador
import { useParams } from "react-router-dom";

export const TaksForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  // Traemos las tareas del estado de ridux y las guardamos en una constante
  const tareas = useSelector((estado) => estado.tasks);
  // Params va a contener la url que tenemos en el momento en que llamamos el TaskForm
  // const params = useParams();
  // con esto tomamos el id directamente
  const {id} = useParams();
  // funcion para cambiar de pagina
  const navigate = useNavigate();
  // funcion para disparar eventos desde nuestro taskSlice
  const dispatch = useDispatch();

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
    // Si existe el id en la url que tomamos haciendo uso del hook useParams
    // entonces significa que estamos actualizando en caso contrario continua creando como siempre
    if (id) {
      dispatch(updateTask(task))
    }
    else{
      // Y mostramos la tarea que hay en el estado
      // console.log(task);
  
      // Para ejecutar la funcion se hace uso del useDispatch
      //dispatch(addTask(task)); // (Proxy es el state y type es el action (en consola) y payload son los parametros que le pasamos)
      dispatch(
        addTask({
          // hacemos una copia del objeto (state) y le añadimos una propiedad extra llamada id
          ...task,
          id: uuid(),
        })
      );
    }
    // Una vez ejecutado el dispatch ejecutame el navegate('ruta') y enviame a la ruta inicial
    navigate('/');
  };

  useEffect(() => {
    // Si el id coincide con una tarea devuelveme el objeto que contiene esa tarea
    if (id) {
      // Cambiamos el estado que teniamos por lo que encontramos con .find (el objeto con su respectiva tarea)
      // Osea un title y una description
      setTask(
        // Find recorre el arreglo de tareas y busca una considencia en caso de que no haya devuelve undefined
        tareas.find((tarea) => tarea.id === id)
      )
    }
  }, [id, tareas])

  return (
    // Y aqui le decimos que cuando se de enviar ejecute esa funcion
    <form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4'>
      <label htmlFor="title" className="block text-sm font-bold mb-2">Task:</label> 
      {/* Cuando alguien empiece a cambiar el valor mandamos la funcion */}
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        // Con esto le decimos que muestre el titulo que tenemos en el estado
        value={task.title}
        className='w-full p-2 rounded-md bg-zinc-600 mb-2'
      />
      <label htmlFor="description" className="block text-sm font-bold mb-2">Description:</label> 
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
        className='w-full p-2 rounded-md bg-zinc-600 mb-2'
      ></textarea>
      <button type="submit" className="bg-indigo-600 px-2 py-1 rounded-md">Save</button>
    </form>
  );
};
