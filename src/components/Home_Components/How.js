import React from "react"
import Primero from "../../Assets/primero.webp"
import Segundo from "../../Assets/segundo.webp"
import Tercero from "../../Assets/tercero.webp"
import HowElement from "./HowElement"

export default function How() {
  return (
    <div className="how" data-scroll-section>
      <h2 data-scroll data-scroll-speed="-1">
        como lo Hacemos
      </h2>
      <HowElement
        title="PRIMERO"
        text="Contactas con nosotros, en base a dicho contacto, generamos un
          prototipo que te será entregado posteriosmente, este proceso es libre
          de cargos, por lo que no tengas ningún problema en"
        a="contactarnos"
        href="#contacto"
        src={Primero}
        position="left"
      />
      <HowElement
        title="SEGUNDO"
        text="Si le convence el prototipo, pasamos a hablar del presupuesto y el
          plazo de entrega, asimismo establecemos el tipo de servicio que ha
          usted le convenga, como también el tipo de hosting"
        src={Segundo}
        position="right"
      />
      <HowElement
        title="TERCERO"
        text="Una vez terminado el sitio, el mismo es desplegado tomando en cuenta
          los terminos hablados durante el paso anterior"
        src={Tercero}
        position="left"
      />
    </div>
  )
}
