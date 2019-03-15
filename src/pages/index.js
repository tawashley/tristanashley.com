import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>
        Hi there, I'm a front end developer that makes 'internet things'.
    </h2>

  </Layout>
)

export default IndexPage
