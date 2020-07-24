import React from 'react';
/* import './App.css'; */
import { DatePicker,Card } from 'antd';
import './scss/index.scss';


function App() {

  let nombre = 'Miguel Pantigoso'

  return (
    
    <div>
      <h1 class="App">Funciones</h1>
      <DatePicker/>
      <Card
        title="Default"
        extra={<a href="#">Más..</a>}
        style={{width:380}}>
        <p>{nombre}</p>
      </Card>
    </div>
  );
}

export default App;
