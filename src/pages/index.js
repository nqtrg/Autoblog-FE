import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
export default () => (
  <Container>
    <div style={{ color: `purple` }}>
      <Header headerText="Home" />
      <p>Great Gatsby</p>
    </div>
  </Container>
)