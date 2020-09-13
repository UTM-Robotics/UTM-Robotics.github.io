import React, { Component } from "react";
export default class Tag extends Component {
  constructor(props) {
    super(props);
    this.tag = props.tag;
  }
  render() {
    const tag = this.tag;
    var color = { color: "red" };
    switch (tag) {
      case "Collab":
        color = { color: "blue" };
        break;
      case "Workshop":
        color = { color: "yellow" };
        break;
      case "Fun":
        color = { color: "orange" };
        break;
      case "Academic":
        color = { color: "green" };
        break;
      default:
        color = { color: "grey" };
        break;
    }
    return (
      <div class="tag" style={color}>
        <label>{tag}</label>
      </div>
    );
  }
}
