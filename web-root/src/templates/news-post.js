import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import moment from "moment";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default class newsPost extends Component {
  render() {
    const data = this.props.data.contentfulNews;
    return (
      <Layout>
        <SEO
          title={data.title}
          keywords={[
            `Rohit Gupta`,
            `Frontend Developer`,
            `Developer`,
            `${data.title}`
          ]}
        />
        <div className="site-container blog-post">
          <div className="container">
            {data.featureImage ? (
              <Img
                className="feature-img"
                fixed={data.featureImage.fluid}
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
                {moment(data.date).format("LL")}
              </span>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.article.childMarkdownRemark.html
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
  query NewsPostQuery($slug: String!) {
    contentfulNews(slug: { eq: $slug }) {
      id
      title
      slug
      article {
        childMarkdownRemark {
          html
        }
      }
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
      date
    }
  }
`;
