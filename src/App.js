import './App.css';
import Home from './pages/home';
import Contato from './pages/contato/contato'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Curiosidades from './pages/curiosidades/curiosidades';
import Municipios from './pages/municipios/municipios';

function App() {
  
    return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/municipios' element={<Municipios />}/>
        <Route path='/curiosidades' element={<Curiosidades />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//BrowserRouter deve envolver a raiz da nossa aplicação
//Routes envolve todas as nossas rotas
//Route serve para criar a rota
