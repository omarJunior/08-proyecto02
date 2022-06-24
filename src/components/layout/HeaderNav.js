import React from 'react'

import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>O</span>
            <h3>Omar Hernandez </h3>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink className={(e)=> e.isActive ? 'active' : ""} to="/inicio">Inicio</NavLink>
                </li>

                <li>
                    <NavLink className={(e)=> e.isActive ? 'active' : ""} to="/portafolio">Portafolio</NavLink>
                </li>

                <li>
                    <NavLink className={(e)=> e.isActive ? 'active' : ""} to="/servicios">Servicios</NavLink>
                </li>

                <li>
                    <NavLink className={(e)=> e.isActive ? 'active' : ""} to="/curriculum">Curriculum</NavLink>
                </li>

                <li>
                    <NavLink className={(e)=> e.isActive ? 'active' : ""} to="/contacto">Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
