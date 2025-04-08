import { useState } from 'react';
import './App.css';

function App() {

  const [cont, setCont] = useState(0);

  const suma = () => {
    return setCont(cont+1);
  }
  const resta = () => {
    return setCont(cont-1);
  }

  return(
    <div id='container'>
      <h1>{cont}</h1>
      <button onClick={suma}>sumar</button>
      <button onClick={resta}>restar</button>
    </div>
  );
}

export default App
