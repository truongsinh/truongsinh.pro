module.exports = {
  plugins: [
    // Expose `/data` to graphQL layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`
      }
    },
    `gatsby-plugin-lodash`, // https://github.com/Semantic-Org/Semantic-UI-React/issues/2175
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    "gatsby-plugin-typescript",
  ]
};
