import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import moment from "moment";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class News extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO
          title="News"
          keywords={[
            `UofT`,
            `Toronto`,
            `Electrical`,
            `Mechanical`,
            `Computer Science`,
            `UTM`,
            `Robotics`,
            `News`,
          ]}
        />
        <div className="site-container news-page" id="News">
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading h2">News</h1>
            </div>
            <ul
              className={`blogs-list ${
                data.allContentfulNews.edges.length < 5 ? "few-blogs" : ""
              }`}
            >
              {data.allContentfulNews.edges.map((item, index) => {
                return (
                  <li key={index} className="item">
                    <div className="inner">
                      <Link className="link" to={"news/" + item.node.slug} />
                      {item.node.featureImage ? (
                        <Img
                          fixed={item.node.featureImage.fluid}
                          objectFit="cover"
                          objectPosition="50% 50%"
                        />
                      ) : (
                        <div className="no-image"></div>
                      )}
                      <div className="details">
                        <h3 className="title">{item.node.title}</h3>
                        <span className="date">
                          <i className="fas fa-calendar-alt"></i>{" "}
                          {moment(item.node.date).format("LL")}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query allNewsQuery {
    allContentfulNews(sort: { fields: date, order: DESC }) {
      edges {
        node {
          title
          slug
          featureImage {
            fluid(maxWidth: 1500) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          tags
          date
        }
      }
    }
  }
`;
