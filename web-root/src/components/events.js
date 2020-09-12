import React, { Component } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import Tag from "./tags";
import moment from "moment";

export default class Events extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="blogs-section section" id="Events">
        <div className="container">
          <div className="section-head">
            <h2>Events</h2>
          </div>
          <ul
            className={`blogs-list ${data.edges.length < 5 ? "few-blogs" : ""}`}
          >
            {data.edges.map((item, index) => {
              return (
                <li key={index} className="item">
                  <div className="inner">
                    <Link className="link" to={item.node.slug} />
                    {item.node.featureImages ? (
                      <Img
                        fixed={item.node.featureImages[0].fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                    ) : (
                      <div className="no-image"></div>
                    )}
                    <div className="details">
                      {item.node.tags.forEach((element) => {
                        return (<Tag tag={element}></Tag>);
                      })}
                      <h3 className="title">{item.node.title}</h3>
                      <span className="date">
                        <i className="fas fa-calendar-alt"></i>{" "}
                        {moment(item.node.createdAt).format("LL")}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="see-more">
            <Link to="/Events">
              <span>More Events</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
