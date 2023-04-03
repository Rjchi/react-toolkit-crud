import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/taskSlice";

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  const dispatch = useDispatch();
  // Funcion para eliminar una tarea con esto estamos llamando el reducer de tasks
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-10/9">
      {/* Para mostrar la cantidad de tareas que tenemos en el arreglo de objetros */}
      {/* Nos refleja lo que tiene el estado actualmente */}
      <h1>Task {tasks.length}</h1>
      <div className="grid grid-cols-4 gap-7">
        {/* Con esto recorremos el arreglo de tareas y por cada tarea retornamos el titulo y la descripcion,
      y añadimos una clave unica */}
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-10 rounded-md">
            <header className="flex justify-between m-2">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
                {/* Concatenamos el id (ver rutas en app.js) */}
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-zinc-600 px-2 py-1 text-sm rounded-md"
                >
                  Edit
                </Link>
                {/* Añadimos un boton que llame la funcion para poder eliminar una tarea */}
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 px-2 py-1 text-sm rounded-md"
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
