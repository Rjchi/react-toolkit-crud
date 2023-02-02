import "./App.css";
// Vamos a llamar al estado con:
// El useSelector es para seleccionar o traer algo desde el estado
import { useSelector } from 'react-redux'
import { TaskList } from "./components/TaskList";
import { TaksForm } from "./components/TaskForm";

export const App = () => {
  // El useSelector tiene acceso a todo el estado
  // Aqui lo que decimos quiero acceder desde el estado a mis tareas (Que en este caso son las que definimos en el store)
  // const tasksState = useSelector(state => state.tasks)
  // console.log(tasksState);

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <TaskList />
      <TaksForm />
    </div>
  );
};
