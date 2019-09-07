import React from "react"
import containerStyles from "./container.module.css"
import { Link } from "gatsby"

export default ({ children }) => (
  <div className={containerStyles.container}>
    <h3>Autoblog</h3>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/about-css-modules">About-CSS</Link>
    {children}
  </div>
)