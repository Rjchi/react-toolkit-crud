// App contiene nuestra aplicacion principal
import "./App.css";
// Vamos a llamar al estado con:
// El useSelector es para seleccionar o traer algo desde el estado
import { useSelector } from "react-redux";
import { TaskList } from "./components/TaskList";
import { TaksForm } from "./components/TaskForm";
// Hacemos uso de react-router-dom
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

export const App = () => {
  // El useSelector tiene acceso a todo el estado
  // Aqui lo que decimos quiero acceder desde el estado a mis tareas (Que en este caso son las que definimos en el store)
  // const tasksState = useSelector(state => state.tasks)
  // console.log(tasksState);

  return (
    <BrowserRouter>
      <header>
        <Link to="/create-task">
          <h1>Crear Tarea</h1>
        </Link>
        <Link to="/">
          <h1>Lista Tareas</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route exact path="/create-task" element={<TaksForm />} />
          {/* En este caso añadimos el id de la tarea */}
          {/* Con : determinamos la propiedad que queramos del arreglo de tares en este caso solo
          tomamos el id pero tambien podemos tomar cualquier otro como el title o description etc */}
          <Route exact path="/edit-task/:id" element={<TaksForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
