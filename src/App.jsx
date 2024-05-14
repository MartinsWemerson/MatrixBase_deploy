import { useState } from 'react'
import {Route,Routes} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import {Home} from './components/pages/Home'
import {Contato} from './components/pages/Contato'
import {Serviços} from './components/pages/Serviços'
import {Perfil} from './components/pages/Perfil'
import { Footer } from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>

    <Routes>
    <Route path='*' element={<h1 className=' mb:text-8xl  text-2xl  m-36   text-center '> erro 404 </h1> } />
      <Route path='/' element={<Home/>} />
      <Route path='/Contato' element={<Contato/>} />
      <Route path='/serviços' element={<Serviços/>} />
      <Route path='/perfil' element={<Perfil/>} />
    </Routes>
     
     <Footer/>
    </>
  )
}

export default App
