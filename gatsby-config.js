module.exports = {
  siteMetadata: {
    title: `Shilpa Soni, Software Developer`,
    description: ``,
    author: ``,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        pathToStylesProvider: `src/styles-provider-props`,
        disableAutoprefixing: false,
        disableMinification: false,
      },
    },
    `gatsby-plugin-styled-components`,

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
