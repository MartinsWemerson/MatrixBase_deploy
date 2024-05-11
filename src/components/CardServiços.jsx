import React from 'react'
import {Link} from 'react-router-dom'

export const CardServiços = (props) => {
  return (
    <article className='flex justify-around  mt-10 items-center gap-28 p-12 m-20  bg-green-500 border-4'>
    <img src={props.img} title='servidores gereados por ia' alt="servidores" className='w-1/4 h-4/5 ' />
    <section className='flex flex-col gap-4 text-white font-medium'>
      <h1 className='text-2xl'>{props.title}</h1>
      <p>{props.description}</p>
      <Link to={props.to} className=" bg-green-950 hover:bg-green-800 hover:text-stone-950  w-28 h-12 text-center pt-3 rounded-lg " >{props.butao}</Link>
    </section>
    </article>
  )
}
