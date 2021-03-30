import './App.css';

import Mensaje from "./Mensaje.js"

const persona = {
  nombre: 'Rafa',
  apellidos: ['Ruiz','Garre'],
  edad: 35,
  desarrollador: true,
  enlazado: 'Elemento encontrado con el nombre de una variable'
}

const Descripcion = () => {
  return (<p><strong>Esta es la descripcion desde un componente</strong></p>)
}

const App = () => {
  const titulo = 'Este es el titulo de la web desde una variable'
  return (
    <div className="App">
      <body>
        <h1>{titulo + ' y este texto concatenado'}</h1>
        <p>{new Date().toString()}</p>
        <Mensaje numero="1" nombre="Rafa" persona={persona} />
        <Mensaje numero="2" nombre="Tami" persona={persona} />
        <Mensaje numero="3" nombre="Ali" persona={persona} />
        <Descripcion />
      </body>
    </div>
  );
}



export default App;
