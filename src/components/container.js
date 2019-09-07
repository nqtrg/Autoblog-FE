import React from "react"
import containerStyles from "./container.module.css"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default ({ children }) => (
  <div className={containerStyles.container}>
    <Link to="/" className={containerStyles.siteTitle}>
      <h3 style={{ display: `inline` }}>Autoblog</h3>
    </Link>

    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about">About</ListLink>
      <ListLink to="/about-css-modules">About-CSS</ListLink>
    </ul>
    {children}
    <footer>
      (c) Quang-Ngu Truong 2019
    </footer>
  </div>
)