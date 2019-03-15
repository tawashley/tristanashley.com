import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>
        Hi there, I'm a front end developer that makes 'internet things'.
    </h2>
    <p>
        There isn't much to see here really, but I do have a few links that go to here, there and everywhere
    </p>
    <ul>
        <li>
            <a href="https://github.com/tawashley">
                GitHub - things I've made
            </a>
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

export default IndexPage
