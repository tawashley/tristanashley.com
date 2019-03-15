import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h2 style={{ marginTop: 0 }}>
          Hi there, I'm a front end developer that makes 'internet things'.
        </h2>
        <p>
          There isn't much to see here really, but I do have a few links that go
          to 'here, there and everywhere'.
        </p>
        <ul>
          <li>
            <a href="https://github.com/tawashley">GitHub - things I've made</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tristanashley">
              LinkedIn - things I've done
            </a>
          </li>
          <li>
            <a href="https://twitter.com/tawashley">
              Twitter - things I've said
            </a>
          </li>
        </ul>
      </Layout>
    )
  }
}
