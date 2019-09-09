import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"

export default ({ data }) => {
  return (
    <Container>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  )
}

// Note: this is from module `gatsby-source-filesystem`
export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          birthTime(fromNow: true)
        }
      }
    }
  }
`