import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './screen/Home.jsx'
import Pokemon from './screen/Pokemon.jsx'
import Aleatorio from './screen/Aleatorio.jsx'
import Detalhes from './screen/Detalhes.jsx'
import Login from './screen/Login.jsx'
import Cadastro from "./screen/Cadastro"
import Perfil from "./screen/Perfil"
import Favoritos from "./screen/Favoritos"
import Sobre from "./screen/Sobre"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route path="/home" element={<Home />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/aleatorio" element={<Aleatorio />} />
      <Route path="/pokemon/:id" element={<Detalhes />} />
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />

    </Routes>
  </BrowserRouter>
)