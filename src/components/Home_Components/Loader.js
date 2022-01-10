import React, { useEffect } from "react"

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)
    return () => clearTimeout(timer)
  })
  return (
    <div className="loader">
      <span>L</span>
      <span>I</span>
      <span>T</span>
      <span>E</span>
      <span>N</span>
      <span>C</span>
      <span>I</span>
    </div>
  )
}

export default Loader
