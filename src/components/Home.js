// import "../layout.css"
import React from "react"

import Heading from "./Components/Heading"
import What from "./Components/What"
import How from "./Components/How"

export default function Home() {
  return (
    <div className="App">
      <Heading />
      <What />
      <How />
    </div>
  )
}
