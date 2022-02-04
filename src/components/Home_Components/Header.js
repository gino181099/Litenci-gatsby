import React from "react"

export default function Header() {
  return (
    <div className="header">
      <a className="logo" href="#inicio">
        Litenci
      </a>
      <ul className="menu">
        <li>
          <a href="#about" className="pc-menu">
            Acerca
          </a>
        </li>
        <li>
          <a href="projects" className="pc-menu">
            Proyectos
          </a>
        </li>
        <li>
          <a href="contacto">Contacto</a>
        </li>
        {/* <li>
          <a href="#menu">Menu</a>
        </li> */}
      </ul>
    </div>
  )
}
