module.exports = {
  siteMetadata: {
    title: `Pol Milian | Full-Stack Engineer`,
    description: `Hi! I'm Pol, a Full-Stack Engineer from Barcelona. Nice to meet you!`,
    author: `@E_L_Pol`,
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
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pol Milian`,
        short_name: `Pol Milian`,
        start_url: `/`,
        background_color: `#2d2d2d`,
        theme_color: `#2d2d2d`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-offline`,
  ],
};
