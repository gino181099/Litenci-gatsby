import React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/about"
import Heading from "../components/heading"
import Details from "../components/details"
import Cites from "../components/cites"
import Works from "../components/works"

const IndexPage = () => {
  return (
    <div className="smooth-scroll">
      <Layout>
        <Seo title="Inicio" />
        <Heading />
        <About />
        <Details />
        <Works />
        <Cites />
      </Layout>
    </div>
  )
}
export default IndexPage
