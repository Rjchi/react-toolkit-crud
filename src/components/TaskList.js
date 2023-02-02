import { useSelector } from 'react-redux'

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks)
  console.log(tasks);
  return (
    <div>
      {/* Con esto recorremos el arreglo de tareas y por cada tarea retornamos el titulo y la descripcion,
      y añadimos una clave unica */}
      {tasks.map(task => (
        <div key={task.id}>
          <h2>{task.id}</h2>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};
