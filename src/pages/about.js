import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import { graphql } from "gatsby"


export default ({ data }) => {
  return (
    <Container>
      <div style={{ color: `teal` }}>

        <Header headerText={
          data.site.siteMetadata.aboutTitleDefault +
          " " +
          data.site.siteMetadata.title} />
        <p>Thinking about it</p>
      </div>
    </Container>
  )
}
// NOTE: page query can be used only in pages. 
// For components, try `StaticQuery`
export const query = graphql`
  query {
    site {
      siteMetadata {
        title,
        aboutTitleDefault
      }
    }
  }
`