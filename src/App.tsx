import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Hero from './components/hero'
import Destaques from './components/destaques'
import Catalogo from './components/catalogo'
import Contato from './components/contato'
import Sobre from './components/sobre'
function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
              <Hero />
          <div className='max-w-[1440px] mx-auto w-full"'>
              <Destaques />
              <Catalogo />
              <Contato />
              <Sobre />
          </div>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
