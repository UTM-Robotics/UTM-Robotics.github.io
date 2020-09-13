import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/banner";
import About from "../components/about";
import Team from "../components/team";
import News from "../components/news";
import Events from "../components/events";

import Contact from "../components/contact";
// import Photos from "../components/photos";

const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO
      title={data.contentfulAboutMe.name}
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
    <Banner data={data.contentfulAboutMe}></Banner>

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "About")
      .map((t) => {
        return <About data={data.contentfulAboutMe}></About>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Events")
      .map(t => {
        return <Events data={data.allContentfulEvents}></Events>;
      })}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "News")
      .map((t) => {
        return <News data={data.allContentfulNews}></News>;
      })}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Team")
      .map((t) => {
        return <Team data={data.allContentfulService}></Team>;
      })}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Contact")
      .map((t) => {
        return <Contact data={data.contentfulAboutMe.gmail}></Contact>;
      })}
  </Layout>
);

export default IndexPage;
//Note: Service means "Team" here, technical debt
export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutMe {
      name
      photo {
        file {
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      designation
      #age
      facebook
      #github
      gmail
      id
      instagram
      discord
      #linkdin
      twitter
      location
      description {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
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
      #bannerList
    }
    allContentfulService {
      edges {
        node {
          title
          profileImg{
            fluid(maxWidth: 200) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          
        }
      }
    }
    allContentfulNews(limit: 100, sort: {fields: date, order: DESC}) {
      edges {
        node {
          id
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
          date
        }
      }
    }
    allContentfulEvents (sort: {fields: startTime, order: DESC}) {
      edges {
        node {
          id
          featuredImages {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              srcSetWebp
              sizes
            }
          }
          startTime
          endTime
          slug
          isFeatured
          title
          tags
        }
      }
    }
    contentfulPhotos {
      photos {
        fluid(maxWidth: 600) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
    contentfulSiteInformation {
      menus
    }
  }
`;
