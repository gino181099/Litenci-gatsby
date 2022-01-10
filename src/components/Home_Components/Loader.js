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
      <h1>Loading</h1>
      <p>...</p>
    </div>
  )
}

export default Loader
