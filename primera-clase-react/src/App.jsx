import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Home from './components/home';
import Listado from './components/listado';

function App() {
  return(
    <BrowserRouter>
      <nav>
        <Link to="/home" >Home</Link>
        <Link to="/listado" >Listado</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/listado" element={<Listado></Listado>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
