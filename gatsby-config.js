module.exports = {
  siteMetadata: {
    title: `Litenci Diseño Web en Mendoza`,
    description: `Compañia de creación de sitios web para empresas.`,
    author: `@litenci`,
    siteUrl: `https://litenci.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
        },
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `litenci-diseño-web`,
        short_name: `litenci`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/Assets/android-chrome-192x192.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
