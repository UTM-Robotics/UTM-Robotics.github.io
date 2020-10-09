import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import moment from "moment";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default class eventsPost extends Component {
  render() {
    const data = this.props.data.contentfulEvents;
    return (
      <Layout >
        <SEO
          title={data.title}
          keywords={[
            `UofT`,
            `Toronto`,
            `Electrical`,
            `Mechanical`,
            `Computer Science`,
            `UTM`,
            `Robotics`,
            `News`,
            `${data.title}`
          ]}
        />
        <div className="site-container blog-post">
          <div className="container">
            {data.featuredImages.length > 0 ? (
              <Img
                className="feature-img"
                fixed={data.featuredImages[0].fluid}
                objectFit="cover"
                objectPosition="50% 50%"
              />
            ) : (
              <div className="no-image"></div>
            )}

            <div className="details">
              <h1 className="title">{data.title}</h1>
              <span className="date">
                <i class="fas fa-calendar-alt"></i>{" "}
                {moment(data.startTime).format("LL")}
              </span>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.description.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query EventsPostQuery($slug: String!) {
    contentfulEvents(slug: { eq: $slug }) {
      featuredImages {
        fluid {
          base64
          aspectRatio
          src
          srcSetWebp
          srcWebp
          srcSet
          sizes
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      startTime
      endTime
      title
      isFeatured
      tags
    }
  }
`;
