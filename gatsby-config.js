module.exports = {
  pathPrefix: "/blogendfront",
  siteMetadata: {
    title: `blogendFront`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/components"]
      }
    },
    `gatsby-transformer-remark`
  ]
};
