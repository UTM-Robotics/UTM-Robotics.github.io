import React, { Component } from "react";

export default class team extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="team section" id="Team">
        <div className="container">
          <div className="section-head">
            <h2>Team</h2>
          </div>
          <div className="row">
            {data.edges.map((item, index) => {
              return (
                <div key={index} className="col-md-4 mb-3">
                  <div className="team-main">
                    <h3>{item.node.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.node.description.childMarkdownRemark.html
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
