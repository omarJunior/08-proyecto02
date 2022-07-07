import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
        {
          trabajos.map((item, index)=> (
            <article key={index}>
              <span>{item.categorias}</span>
             <Link to=""><h2>{item.nombre}</h2></Link>
              <h3>{item.tecnologias}</h3>
            </article>
          ))
        }
    
    </div>
  )
}
