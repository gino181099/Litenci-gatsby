import React, { useEffect, useRef } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/Home"

const IndexPage = () => {
  return (
    <div className="smooth-scroll">
      <Layout>
        <Seo title="Inicio" />
        <Home className="home" />
      </Layout>
    </div>
  )
}
export default IndexPage
