import React from 'react'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav className=' flex justify-between  bg-green-600 text-white  p-3  text-sm sm:text-bold font-medium top-auto '>
     <Link to="/"className=' hover:text-stone-800 '  >Home</Link>   
     <ul className='flex justify-between gap-3 sm:gap-6 mr-3 max-sm  '  >
     <li><Link to="/serviços"className=' hover:text-stone-800' >Serviços</Link></li>
    
     <li> <Link to="contato" className=' hover:text-stone-800'>Contato</Link></li>

        </ul>    
    </nav>
  )

}
