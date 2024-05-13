import React from 'react'
import {Link} from 'react-router-dom'

export const CardServiços = (props) => {
  return (
    <article className='flex sm:justify-around sm:flex-row flex-col  mt-10 items-center sm:gap-28 gap-4 sm:p-12 p-4 m-4 sm:m-20  bg-green-500 border-4'>
    <img src={props.img} title='servidores gereados por ia' alt="servidores" className='sm:w-1/4 w-full sm:h-4/5 h-40 ' />
    <section className='flex flex-col gap-4 text-white font-medium'>
      <h1 className='text-2xl'>{props.title}</h1>
      <p>{props.description}</p>
      <Link to={props.to} className=" bg-green-950 hover:bg-green-800 hover:text-stone-950  sm:w-28 h-12 text-center pt-3 rounded-lg " >{props.butao}</Link>
    </section>
    </article>
  )
}
