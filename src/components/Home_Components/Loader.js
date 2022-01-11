import React, { useEffect } from "react"

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

export default Loader
