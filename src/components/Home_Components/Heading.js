import { StaticImage } from "gatsby-plugin-image"
import React from "react"
// import Design from "../../Assets/design.webp"

export default function Heading({ loading }) {
  return (
    <div className="heading" data-scroll-section>
      <div className="content__heading">
        <p className="big an_1">Web</p>
        <p className="text__content">
          Brindamos servicios de diseño y desarrollo que no solo aumentarán la
          visibilidad y los ingresos de su empresa, sino que también le
          ahorrarán tiempo y recursos.
        </p>
      </div>
      <div className="marquee__heading">
        <p className="big">experiences</p>
        <p className="big">experiences</p>
        <p className="big">experiences</p>
        <p className="big">experiences</p>
      </div>
      <div className="design__heading">
        <p className="big an_2">design</p>
        {!loading && (
          <StaticImage
            src="../../Assets/design.webp"
            alt="Web experience design"
          />
        )}
      </div>
    </div>
  )
}
