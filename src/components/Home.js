// import "../layout.css"
import React from "react"

import Heading from "./Home_Components/Heading"
import What from "./Home_Components/What"
import How from "./Home_Components/How"

export default function Home() {
  return (
    <div className="App">
      <Heading />
      <What />
      <How />
    </div>
  )
}
