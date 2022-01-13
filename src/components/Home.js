// import "../layout.css"
import React, { useState, useEffect } from "react"

import Heading from "./Home_Components/Heading"
import What from "./Home_Components/What"
import How from "./Home_Components/How"
import Loader from "./Home_Components/Loader"
import Contact from "./Home_Components/Contact"

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading")
  }, [loading])

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Heading loading={loading} />
          <What />
          <How />
          <Contact />
        </>
      )}
    </>
  )
}
