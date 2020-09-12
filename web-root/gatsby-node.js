var path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const newsPostTemplate = path.resolve("src/templates/news-post.js");
    const eventsPostTemplate = path.resolve("src/templates/event-post.js");
    resolve(
      graphql(`
        {
          allContentfulNews(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
          allContentfulEvents(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulNews.edges.forEach(edge => {
          createPage({
            path: "news/" + edge.node.slug,
            component: newsPostTemplate,
            context: {
              slug: edge.node.slug
            }
          });
        });
        result.data.allContentfulEvents.edges.forEach(edge => {
          createPage({
            path: "events/" + edge.node.slug,
            component: eventsPostTemplate,
            context: {
              slug: edge.node.slug
            }
          });
        });
        return;
      })
    );
  });
};