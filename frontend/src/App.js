import React from 'react';

import './global.css'
import Routes from './routes'

function App() {
  return (
    <Routes />
  );
}

export default App;

  /** Funcionamento com a page header.js 

import React, { useState } from 'react';
import Header from './Header'
function App() {
  const [count, setCount] = useState(0);
  // Retorna um Array = [valor, FunçaoDeAtualização]


  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <Header>Contador: {count}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
*/
