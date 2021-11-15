import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Works = () => {
  return (
    <div className="works" id="trabajos">
      <h2>Trabajos</h2>
      <div className="carrusel">
        <StaticImage
          src="..\images\computadora.webp"
          alt="Centro de estetica Ita fit"
          objectFit="cover"
          className="computadora"
          layout="constrained"
        />
        <div className="item__carrusel">
          <p className="cerot">Estética Ita Fit</p>
          <StaticImage
            src="..\images\work1.webp"
            alt="Centro de estetica Ita fit"
            objectFit="cover"
            className="img__item"
            layout="constrained"
          />
        </div>
        <div className="item__carrusel uno">
          <p className="unot">Gimnasio Ita Fit</p>
          <StaticImage
            src="..\images\work2.webp"
            alt="Gimnasio Funcional Ita fit"
            objectFit="cover"
            className="img__item"
            layout="constrained"
          />
        </div>
        <div className="item__carrusel dos">
          <p className="dost">Alfimexsa</p>
          <StaticImage
            src="..\images\work3.webp"
            alt="Alfimexsa"
            objectFit="cover"
            className="img__item"
            layout="constrained"
          />
        </div>
        <div className="item__carrusel tres">
          <p className="trest">Frabel Viajes</p>
          <StaticImage
            src="..\images\work4.webp"
            alt="Frabel Viajes"
            objectFit="cover"
            className="img__item"
            layout="constrained"
          />
        </div>
      </div>
    </div>
  )
}

export default Works
