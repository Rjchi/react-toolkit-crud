import { useSelector } from 'react-redux'

export const TaksForm = () => {
    // Ejemplo de como desde cualquier componente  puedo acceder al stado que se encuentra en store
    // En caso de que se actualice el estado desde aqui se va a ver reflejado
    // en todos los demas componentes
    const stateTask = useSelector(state => state.task)
    console.log(stateTask);
    return (
    <div>
      <h2>Task Form</h2>
    </div>
  );
};
