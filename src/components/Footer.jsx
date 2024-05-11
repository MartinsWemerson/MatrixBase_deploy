import React from 'react'

import { ImWhatsapp, ImDrawer2 , ImLinkedin } from "react-icons/im";
export const Footer = () => {
  return (
   <footer className='flex justify-around bg-green-800 ' >
    <section className='bg-green-800 text-white font-medium h-30 p-16'>
        <h1 className=' border-b-2 w-28 border-green-300 '>MatrixBase</h1>
        <p className=' mt-3 text-sm'>oferece serviços de armazenamento,<br /> processamento e gerenciamento de <br />dados para diversos setores. <br />  Seu foco é fornecer infraestrutura <br />confiável e segura, garantindo a <br /> disponibilidade e integridade dos <br /> dados dos clientes.</p>
       
    </section>
    <section className='bg-green-800 text-white font-medium h-30 p-16'>
        <h1 className=' border-b-2 w-28 border-green-300 '>Produtos</h1>
        <ul className='flex flex-col gap-3  text-sm'>
          <li className='mt-3'><p>Serviços de colocation</p></li>
        <li> <p>Serviços de conectividadei</p></li>
        <li> <p>armazenamento em nuvem </p></li>
        <li> <p>Hospedagem de servidores </p></li></ul>
    </section>
    <section className='bg-green-800 text-white  p-16 font-medium'>
        <h1 className=' border-b-2 w-28 border-green-300 '>Produtos</h1>
        <ul className='flex flex-col gap-3 text-sm'>
          <li className='flex align-baseline mt-4 gap-2'> <ImLinkedin /> <p> MatrixBase</p></li>
          <li className='flex align-baseline  gap-2'> <ImDrawer2 /> <p> MatrixBase@tester.com</p></li>
          <li className='flex align-baseline  gap-2'> <ImWhatsapp /> <p> +55 (21) 9962-09811</p></li>
       </ul>
    </section>
       
  
  
   </footer>

  )
}
