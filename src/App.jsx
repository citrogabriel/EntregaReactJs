
import './App.css'
import ItemListContainer from "./assets/Componentes/ItemListContainer/ItemListContainer.jsx";
import Navbar from './assets/Componentes/Navbar/Navbar.jsx';
import Layout from './assets/Componentes/Pages/Layout.jsx';
import { categorias } from './assets/DataJs/Data.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from "./assets/Componentes/Contacto/Contacto.jsx";
import About from "./assets/Componentes/About/About.jsx";




function App() {

  const variableTitulo = "Entrega React Weber Gabriel"
   return (
    <>
    <BrowserRouter>
     <Layout>
      <Routes>
        <Route path="/" element={<ItemListContainer tittle={variableTitulo}/>} />
        <Route path="/product/:Id" element={<ItemListContainer/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
     </Layout>
    </BrowserRouter>
    </>
   )
};
  


export default App;



