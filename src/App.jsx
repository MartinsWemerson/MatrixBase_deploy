
import {Route,Routes} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import {Home} from './components/pages/Home'
import {Serviços} from './components/pages/Serviços'
import {Perfil} from './components/pages/Perfil'
import { Footer } from './components/Footer';
function App() {

  return (
    <>
     <NavBar/>

    <Routes>
    <Route path='*' element={<h1 className=' mb:text-8xl  text-2xl  m-36   text-center '> erro 404 </h1> } />
      <Route path='/' element={<Home/>} />
      <Route path='/serviços' element={<Serviços/>} />
      <Route path='/perfil' element={<Perfil/>} />
    
    </Routes>
     
     <Footer/>
    </>
  )
}

export default App
