import React from "react"

export default function Contact() {
  return (
    <div className="contact">
      <div className="left__contact">
        <h2>Contacto</h2>
        <ul>
          <li>
            Tel: <a href="https://wa.me/5492613729056">+54 9 261 372 9056</a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:contacto@litenci.com">contacto@litenci.com</a>
          </li>
        </ul>
      </div>
      <div className="right__contact">
        <p>Siguenos en:</p>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/litencidisenoweb/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.6667 10.667H21.3334C15.4423 10.667 10.6667 15.4426 10.6667 21.3337V42.667C10.6667 48.558 15.4423 53.3337 21.3334 53.3337H42.6667C48.5577 53.3337 53.3334 48.558 53.3334 42.667V21.3337C53.3334 15.4426 48.5577 10.667 42.6667 10.667Z"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44 20V20.001"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              @litencidiseñoweb
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/Litenci-Dise%C3%B1o-Web-100818598914807"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6667 26.6667V37.3333H26.6667V56H37.3334V37.3333H45.3334L48 26.6667H37.3334V21.3333C37.3334 20.6261 37.6143 19.9478 38.1144 19.4477C38.6145 18.9476 39.2928 18.6667 40 18.6667H48V8H40C36.4638 8 33.0724 9.40476 30.5719 11.9052C28.0714 14.4057 26.6667 17.7971 26.6667 21.3333V26.6667H18.6667Z"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Litenci Diseño Web
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
