import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Carrito from './componentes/Carrito';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
          <div className="app">
              <Header/>
          </div>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/detail" element={<ItemDetailContainer/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
          <Route path="/categorias/:categoria" element={<Home/>} />
          <Route path='/carrito' element={<Carrito/>}/>
        </Routes>
    </Router>
  );
}

export default App;
