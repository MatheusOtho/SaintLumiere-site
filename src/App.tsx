import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import Contato from "./pages/contato"
import SobreNos from "./pages/sobrenos"

import Poltronas from "./pages/categorias/poltronas/poltronas"
import DetalhesPoltronas from "./pages/categorias/poltronas/detalhespoltronas"

import Bancos from "./pages/categorias/bancos/bancos"
import DetalhesBancos from "./pages/categorias/bancos/detalhesbancos"

import Decoracoes from "./pages/categorias/decoracoes/decoracoes"
import DetalhesDecoracoes from "./pages/categorias/decoracoes/detalhesdecoracoes"

import Mesas from "./pages/categorias/mesas/mesas"
import DetalhesMesas from "./pages/categorias/mesas/detalhesmesas"

import Paisagismo from "./pages/categorias/paisagismo/paisagismo"
import DetalhesPaisagismo from "./pages/categorias/paisagismo/detalhespaisagismo"

import CadeirasEroticas from "./pages/categorias/cadeiras-eroticas/cadeiras-eroticas"
import DetalhesCadeirasEroticas from "./pages/categorias/cadeiras-eroticas/detalhescadeiras-eroticas"

import ProjetosEspeciais from "./pages/categorias/projetosespeciais/projetosespeciais"
import DetalhesProjetosEspeciais from "./pages/categorias/projetosespeciais/detalhesprojetosespeciais"

function App() {
  return (
    <>
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/contato" element={<Contato />} /> 
          <Route path="/sobrenos" element={<SobreNos />} /> 

          <Route path="/categoria-poltronas" element={<Poltronas />} /> 
          <Route path="/categoria-poltronas/:slug" element={<DetalhesPoltronas />} /> 

          <Route path="/categoria-bancos" element={<Bancos />} /> 
          <Route path="/categoria-bancos/:slug" element={<DetalhesBancos />} /> 

          <Route path="/categoria-decoracoes" element={<Decoracoes />} /> 
          <Route path="/categoria-decoracoes/:slug" element={<DetalhesDecoracoes />} /> 

          <Route path="/categoria-mesas" element={<Mesas />} /> 
          <Route path="/categoria-mesas/:slug" element={<DetalhesMesas />} /> 

          <Route path="/categoria-paisagismo" element={<Paisagismo />} /> 
          <Route path="/categoria-paisagismo/:slug" element={<DetalhesPaisagismo />} /> 

          <Route path="/categoria-cadeiras-eroticas" element={<CadeirasEroticas />} /> 
          <Route path="/categoria-cadeiras-eroticas/:slug" element={<DetalhesCadeirasEroticas />} />

          <Route path="/categoria-projetos-especiais" element={<ProjetosEspeciais />} /> 
          <Route path="/categoria-projetos-especiais/:slug" element={<DetalhesProjetosEspeciais />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;