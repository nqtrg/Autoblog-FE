import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/about-css-modules">About-CSS</Link>
    <Header headerText="Home"/>
    <p>Great Gatsby</p>
    
  </div>
)