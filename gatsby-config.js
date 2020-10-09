const dotenv = require("dotenv");
spaceId = null;
accessToken = null;
if (process.env.ENVIRONMENT !== "production") {
  dotenv.config({ path: ".env.development" });
}
spaceId = process.env.CONTENTFUL_SPACE_ID;
accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

module.exports = {
  siteMetadata: {
    title: `UTM Robotics`,
    description: `Official website of the UTM Robotics Club`,
    author: `UTM Robotics Club Executive Team`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken,
        downloadLocal: false,
      },
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
        theme_color: "#FFFFFF",
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    }, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
  ],
};
