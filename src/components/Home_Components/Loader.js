import React, { useEffect } from "react"
import Image from "../Image"

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  })
  return (
    <div className="loader">
      <p className="text">
        <span>L</span>
        <span>i</span>
        <span>t</span>
        <span>e</span>
        <span>n</span>
        <span>c</span>
        <span>i</span>
      </p>
    </div>
  )
}
export const ImageBlock = ({ id }) => {
  return (
    <div className={`image-block ${id}`}>
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </div>
  )
}
export default Loader
