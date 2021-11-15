import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  function toggle() {
    const menuToggle = document.querySelector(".toggle")
    const menu = document.querySelector(".menu")
    const left = document.querySelector(".header-left")
    const right = document.querySelector(".header-right")
    menuToggle.classList.toggle("active")
    menu.classList.toggle("active")
    left.classList.toggle("active")
    right.classList.toggle("active")
    if (menu.classList.contains("active")) {
      menuToggle.innerHTML = "Cerrar"
    } else {
      menuToggle.innerHTML = "Menu"
    }
  }
  return (
    <header>
      <div className="header-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-right"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ff9300"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="9 6 15 12 9 18" />
        </svg>
        <Link to="/">
          <p>Litenci</p>
        </Link>
      </div>
      <div className="header-right">
        <a
          className="contact__header"
          href="https://wa.me/5492613729056"
          target="blank"
          rel="noreferrer"
        >
          Contactar
        </a>
        <div
          className="toggle"
          onClick={toggle}
          onKeyDown={toggle}
          role="button"
          tabIndex={0}
        >
          Menu
        </div>
      </div>
      <div className="menu">
        <div className="left__menu">
          <ul>
            <li>Teléfono: +54 9 261 372-9056</li>
            <li>Correo: contacto@litenci.com</li>
            <li>
              <a href="#inicio" onClick={toggle} onKeyDown={toggle}>
                Políticas de privacidad
              </a>
            </li>
          </ul>
          <div className="redes__left">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/Litenci-Dise%C3%B1o-Web-100818598914807"
                  target="blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-facebook"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>Facebook Litenci</title>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5492613729056"
                  target="blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-whatsapp"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>Whatsapp Litenci</title>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/litencidisenoweb/"
                  target="blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-instagram"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>Instagram Litenci</title>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right__menu">
          <ul>
            <li className="content__item">
              <a
                data-text="Inicio"
                className="link link--elara"
                href="#inicio"
                onClick={toggle}
                onKeyDown={toggle}
              >
                <span>Inicio</span>
              </a>
            </li>
            <li className="content__item">
              <a
                data-text="Acerca"
                className="link link--elara"
                href="#acerca"
                onClick={toggle}
                onKeyDown={toggle}
              >
                <span>Acerca</span>
              </a>
            </li>
            <li className="content__item">
              <a
                data-text="Trabajos"
                className="link link--elara"
                onClick={toggle}
                onKeyDown={toggle}
                href="#trabajos"
              >
                <span>Trabajos</span>
              </a>
            </li>
            <li className="content__item">
              <a
                data-text="Reseñas"
                className="link link--elara"
                onClick={toggle}
                onKeyDown={toggle}
                href="#cites"
              >
                <span>Reseñas</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
