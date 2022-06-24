import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
      <h1>
        Hola soy omar hernandez, soy un futuro desarrollador senior
      </h1>
      <h2>
        Soy desarrollador de la empresa UFOTECH SAS, contacta <Link to="/contacto">aqui conmigo</Link> 
      </h2>

      <section className='last-works'>
        <h2>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>

        <div className='works'>

        </div>

      </section>
    </div>
  )
}
