import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

function renderImage(file) {
  return <Img fluid={file.node.childImageSharp.fluid} className="img"  />
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
        {/* <StaticImage
          // src={src}
          alt={title}
          // placeholder="tracedSVG"
          // className="img"
          objectFit="cover"
          width={600}
        /> */}
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
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
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
