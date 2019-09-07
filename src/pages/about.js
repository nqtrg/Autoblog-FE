import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
export default () => (
  <Container>
    <div style={{ color: `teal` }}>
        <Header headerText="About" />
        <p>Such wow. Very React.</p>
    </div>
    </Container>
)