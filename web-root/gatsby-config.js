const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

//const { spaceId, accessToken } = process.env;
spaceId = "hyhmgfckc4j9";
accessToken = "ojTuQGE-jHUaJqL19Dcv-t-YuLqVV7e0TMUPPSqagyw";
module.exports = {
  siteMetadata: {
    title: `UTM Robotics`,
    description: `Organizational site of the t`,
    author: `@rohitguptab`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken,
        downloadLocal: false,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `University of Toronto Mississauga Robotics Club`,
        short_name: `UTM Robotics Club`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#333`,
        icon: `src/images/fev_icon.png` // This path is relative to the root of the site.
        // icon: `src/images/UTMRoboticslogo.png`
      }
    }, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`
  ]
};
