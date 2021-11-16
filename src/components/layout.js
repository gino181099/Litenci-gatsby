/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
  const [isLinkHoveredClass, setisLinkHoveredClass] = useState()
  function isTouchDevice() {
    return navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
  }
  const isTouch = isTouchDevice()
  useEffect(() => {
    const moveCursor = e => {
      const x = e.clientX - 16
      const y = e.clientY - 16
      setCursorXY({ x, y })
    }

    window.addEventListener("mousemove", moveCursor)
    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])
  useEffect(() => {
    document
      .querySelectorAll(
        'a, .toggle, button, input[type="button"], input[type="submit"]'
      )
      .forEach(el => {
        el.addEventListener("mouseover", () => setisLinkHoveredClass(true))
        el.addEventListener("mouseout", () => setisLinkHoveredClass(false))
      })
  }, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div>
        <div
          className="cursor"
          style={{
            transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0) ${
              isLinkHoveredClass ? "scale(1.5)" : ""
            }`,
            display: `${isTouch ? "none" : "flex"}`,
          }}
        >
          {isLinkHoveredClass ? "Click" : " "}
        </div>
        <main>{children}</main>
        <footer>
          <div className="column">
            <ul>
              <li>
                <a href="mailto:contacto@litenci.com">contacto@litenci.com</a>
              </li>
              <li>
                <a
                  href="https://wa.me/5492613729056"
                  target="blank"
                  rel="noreferrer"
                >
                  +54 9 261 372-9056
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h2>Site map</h2>
            <ul>
              <li>Acerca</li>
              <li>Servicios</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div className="column">
            <h2>Privacidad</h2>
            <ul>
              <li>Politicas de Privacidad</li>
            </ul>
          </div>
          <div className="column">
            <h2>Redes Sociales</h2>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/Litenci-Dise%C3%B1o-Web-100818598914807"
                  target="blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/litencidisenoweb/"
                  target="blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Litenci</a> */}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
