import React from 'react'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav className=' flex justify-between  bg-green-600 text-white p-3  text-bold font-medium  text-base top-auto'>
     <Link to="/"className=' hover:text-stone-800 '  >Home</Link>   
     <ul className='flex justify-between gap-6 mr-3'  >
     <li><Link to="/serviços"className=' hover:text-stone-800' >Serviços</Link></li>
     <li> <Link to="/contato" className=' hover:text-stone-800'> Contato</Link></li>
     <li> <Link to="perfil" className=' hover:text-stone-800'>Perfil </Link></li>

        </ul>    
    </nav>
  )

}
