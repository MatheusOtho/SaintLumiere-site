import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Hero from './pages/hero'

function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
            <Routes>
              <Route path='/' element={<Hero />} />
            </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
