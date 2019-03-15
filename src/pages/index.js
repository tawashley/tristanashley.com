import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import List from "../components/list";
export default class IndexPage extends Component {
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
        <List />
      </Layout>
    )
  }
}
