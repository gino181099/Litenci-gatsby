import React from "react"

export default function What() {
  return (
    <div className="what" data-scroll-section>
      <h2 data-scroll data-scroll-speed="4" data-scroll-class="scroll-opacity">
        que es lo que Hacemos
      </h2>
      <h3>desarrollamos</h3>
      <ul className="list__what">
        <li>
          <p>
            Landing
            <br /> pages
          </p>
        </li>
        <li>
          <p>
            Ecommerce
            <br />
            websites
          </p>
        </li>
        <li>
          <p>
            Professional
            <br />
            websites
          </p>
        </li>
      </ul>
      <p className="more">and more...</p>
    </div>
  )
}
