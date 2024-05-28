import React from 'react'

export const Perfil = () => {
 
  return ( 
    <section className="  flex justify-center ">
      <form action="" className="bg-green-200 size-10/12 flex flex-col mb-40 mt-40 px-24 gap-4">
        <h1 className="font-semibold text-2xl text-green-800 mt-2">Faça o cadastro aqui </h1>
     <input type="text" name="name" id="name" placeholder='Digite seu nome' className='h-8' />
     <input type="text" name="sobrenome" id="sobrenome" placeholder='Digite seu sobrenome'className='h-8' />
     <input type="email" name="email" id="email" placeholder='Digite seu gmail'className='h-8' />
     <input type="password" name="password" id="password" placeholder='Digite sua senha'className='h-8' />
     <input type="password" name="password" id="password" placeholder='Confirme sua senha'className='h-8'/>
     <input type="submit" value="Enviar" className='flex cursor-pointer text-white bg-green-800 hover:bg-green-500 w-20 pl-4 mb-2'/>
      </form>
    </section>
  )
}
