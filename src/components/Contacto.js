import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
        <h1 className='heading'>Contacto</h1>
        <form className='contacto' action='mailto:victor@victor.com'>
          <input type='text' placeholder='Nombres'/>
          <input type='text' placeholder='Apellidos'/>
          <input type='email' placeholder='Email'/>
          <textarea placeholder='Motivo de contacto'></textarea>

          <input type="submit" value="enviar"/>
        </form>
    </div>
  )
}
