import { github_token } from "../../data.json"
import axios from "axios"
import Container from "../components/container"
import Header from "../components/header"
import React, { Component } from "react"
class Github extends Component {
    state = {
        loading: false,
        error: false,
        repos: {
            nodes: ["hi"],
        },
    }
    componentDidMount() {
        this.fetchGithubRepos()
    }
    render() {
        const reps = this.state.repos
        return (
            <Container>
                <Header headerText={
                    'Github'} />
                <div>
                    <div>
                        {this.state.loading ? (
                            <p>Please hold, repos incoming!</p>
                        ) : reps.nodes ? (
                            <>
                                <div>
                                    <h1>My Site's Files</h1>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Url</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {reps.nodes.map(function (node, index) {
                                                return <tr key={index}>
                                                    <td>{node.name}</td>
                                                    <td>{node.url}</td>
                                                    <td>{node.description}</td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                            </>
                        ) : (
                                    <p>[E0001] {this.state.error}</p>

                                )
                        }
                    </div>
                </div>
            </Container>
        )
    }
    // This data is fetched at run time on the client.
    fetchGithubRepos = () => {
        this.setState({ loading: true })
        axios
            .post(
                `https://api.github.com/graphql`,
                {
                    query: `{
                        viewer {
                          repositories(privacy: PUBLIC, first: 10, orderBy: {field: PUSHED_AT, direction: ASC}) {
                            totalCount
                            nodes {
                              name
                              url
                              description
                              defaultBranchRef {
                                target {
                                  ... on Commit {
                                    history(first: 1) {
                                      nodes {
                                        committedDate
                                        message
                                      }
                                    }
                                  }
                                }
                              }
                              object(expression: "master:README.md") {
                                ... on Blob {
                                  text
                                }
                              }
                            }
                          }
                        }
                      }`
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': github_token
                    }
                })
            .then(result => {
                const repositories = result.data.data.viewer.repositories
                // console.log("QUERY RESULT: ", repositories)

                this.setState({
                    loading: false,
                    repos: repositories

                })

            })
            .catch(error => {
                this.setState({ loading: false, error })
            }
            )
    }
}
export default Github