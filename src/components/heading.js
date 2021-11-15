import { Link } from "gatsby"
import Lottie from "lottie-web"
import React, { useEffect, useRef } from "react"

const Heading = () => {
  const container = useRef(null)

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../images/animation.json"),
    })
  }, [])

  return (
    <div className="heading" id="inicio">
      <div className="content">
        <h1>Una mejor manera de obtener resultados</h1>
        <div className="btn__content">
          <Link to="/">Leer más</Link>
          <a
            href="https://wa.me/5492613729056"
            className="active"
            target="blank"
            rel="noreferrer"
          >
            Contacto
          </a>
        </div>
      </div>
      <div className="lottie" ref={container}></div>
    </div>
  )
}

export default Heading
