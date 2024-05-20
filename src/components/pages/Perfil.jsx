import React from 'react'
import {useState} from 'react'
export const Perfil = () => {
 
  const [valor, setValor]= useState(0)
  
  const icrementValor =()=>{
    setValor((prevState) => prevState + 1);
  };
  return ( 
    <>
     <h1>{valor}</h1>
     <button onClick={icrementValor}>adicionar</button>
      </>
  )
}
