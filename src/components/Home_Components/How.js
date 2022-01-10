import React from "react"
import Primero from "../../Assets/primero.jpg"
import Segundo from "../../Assets/segundo.jpg"
import Tercero from "../../Assets/tercero.jpg"

export default function How() {
  return (
    <div className="how" data-scroll-section>
      <h2>como lo Hacemos</h2>
      <div className="left__how" data-scroll>
        <p className="backFont__how">PRIMERO</p>
        <p>
          Contactas con nosotros, en base a dicho contacto, generamos un
          prototipo que te será entregado posteriosmente, este proceso es libre
          de cargos, por lo que no tengas ningún problema en{" "}
          <a href="#contacto">contactarnos</a>
        </p>
        <img src={Primero} alt="Contacto con litenci" />
      </div>
      <div className="right__how" data-scroll>
        <p className="backFont__how">SEGUNDO</p>
        <img src={Segundo} alt="Fase de Prototipado" />
        <p>
          Si le convence el prototipo, pasamos a hablar del presupuesto y el
          plazo de entrega, asimismo establecemos el tipo de servicio que ha
          usted le convenga, como también el tipo de hosting
        </p>
      </div>
      <div className="left__how" data-scroll>
        <p className="backFont__how">TERCERO</p>
        <p>
          Una vez terminado el sitio, el mismo es desplegado tomando en cuenta
          los terminos hablados durante el paso anterior
        </p>
        <img src={Tercero} alt="Finalización del proyecto" />
      </div>
    </div>
  )
}
