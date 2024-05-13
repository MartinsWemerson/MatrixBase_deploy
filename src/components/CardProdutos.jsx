import React from 'react'

export const CardProdutos = (props) => {
  return (
    <article className=' w-2/2 sm:w-96  border-4 p-2 border-green-600 hover:border-green-900 bg-green-500 text-green-50 font-medium text-sm rounded-xl flex  flex-col gap-2' >
    <img className='rounded h-2/3 w-3/2' src={props.img} alt="" />
    <p className='mb-1' >{props.grafo} </p>
  <a className=' text-center bg-green-900 hover:bg-green-800 p-2 mx-20 border-4 border-green-600  rounded-md' href="https://youtube.com" target='blank'>Contrate já</a>
  </article>
  )
}
