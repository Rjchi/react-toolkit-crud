import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteTask, editTask } from '../features/tasks/taskSlice';

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks)
  console.log(tasks);
  const dispatch = useDispatch();
  // Funcion para eliminar una tarea con esto estamos llamando el reducer de tasks
  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      {/* Para mostrar la cantidad de tareas que tenemos en el arreglo de objetros */}
      {/* Nos refleja lo que tiene el estado actualmente */}
      <h1>Task {tasks.length}</h1>
      {/* Con esto recorremos el arreglo de tareas y por cada tarea retornamos el titulo y la descripcion,
      y añadimos una clave unica */}
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          {/* Añadimos un boton que llame la funcion para poder eliminar una tarea */}
          <button onClick={() => handleDelete(task.id)}>
            Delete
          </button>
          {/* Concatenamos el id (ver rutas en app.js) */}
          <Link to={`/edit-task/${task.id}`}>
              Edit
          </Link>
        </div>
      ))}
    </div>
  );
};
