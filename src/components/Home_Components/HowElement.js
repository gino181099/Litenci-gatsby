import React from "react"

const HowElement = ({ title, text, src, position, a, href }) => {
  return (
    <div>
      <div className={position + "__how"}>
        <p className="backFont__how">{title}</p>
        <p>
          {text} {a ? `<a href=${href}>${a}</a>` : " "}
        </p>
        <img src={src} alt={title} data-scroll data-scroll-speed="1.5" />
      </div>
    </div>
  )
}

export default HowElement
