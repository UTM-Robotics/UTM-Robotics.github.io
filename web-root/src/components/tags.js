import React, { Component } from "react";
import { nominalTypeHack } from "prop-types";
import { RedditIcon } from "react-share";

export default class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: false,
    };
  }
  render() {
    tag = this.state.tag
    color = { color: "red" };
    if tag === "":
        pass
    elif tag === "":

    return tag ? (
      <div class="tag" style={color}>
        <label for="">tag.</label>
      </div>
    ): {};
  }
}
