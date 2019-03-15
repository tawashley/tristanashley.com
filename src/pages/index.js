import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import List from "../components/list"
export default class IndexPage extends Component {
  state = {
    links: [
      {
        text: `GitHub - things I've made`,
        href: "https://github.com/tawashley",
      },
      {
        text: `LinkedIn - things I've done`,
        href: "https://www.linkedin.com/in/tristanashley",
      },
      {
        text: `Twitter - things I've said`,
        href: "https://twitter.com/tawashley",
      },
    ],
  }

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
        <List items={this.state.links} />
      </Layout>
    )
  }
}
