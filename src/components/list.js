import React, { Component } from "react"

export default class List extends Component {
  render() {
    return (
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
          <a href="https://twitter.com/tawashley">Twitter - things I've said</a>
        </li>
      </ul>
    )
  }
}
