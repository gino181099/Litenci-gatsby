import { graphql, StaticQuery } from "gatsby"
// import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

function renderImage(file) {
  return (
    <GatsbyImage
      image={file.node.childImageSharp.gatsbyImageData}
      className="img"
      alt="description_image"
    />
  )
}

const HowElement = ({ title, text, src, position, a, href }) => {
  return (
    <div>
      <div className={position + "__how"}>
        <p className="backFont__how">{title}</p>
        <p>
          {text}{" "}
          {a ? (
            <>
              <a href={href}>{a}</a>
            </>
          ) : (
            " "
          )}
        </p>
        <StaticQuery
          query={graphql`
            query {
              images: allFile(
                filter: { sourceInstanceName: { eq: "images" } }
              ) {
                edges {
                  node {
                    extension
                    relativePath
                    childImageSharp {
                      gatsbyImageData(layout: CONSTRAINED)
                    }
                  }
                }
              }
            }
          `}
          render={data => {
            const image = data.images.edges.find(
              image => image.node.relativePath === `${src}`
            )
            return renderImage(image)
          }}
        />
      </div>
    </div>
  )
}

export default HowElement
