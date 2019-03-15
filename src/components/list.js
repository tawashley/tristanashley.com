import React, { Component } from "react"

export default class List extends Component {
  renderItem(itemData, index) {
    return (
      <li key={index}>
        <a href={ itemData.href }>{itemData.text}</a>
      </li>
    )
  }

  renderItems() {
    return this.props.items.map(this.renderItem)
  }

  render() {
    return <ul>{this.renderItems()}</ul>
  }
}
