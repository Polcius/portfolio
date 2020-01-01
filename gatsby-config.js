module.exports = {
  siteMetadata: {
    title: `Pol Milian | Senior Front-End Engineer`,
    description: `Hi! I'm Pol, a Senior Front-End Engineer from Barcelona. I specialize in modern JavaScript (ES6+) frameworks such as React and VueJS to make fast, good and beautiful websites and web-apps.`,
    author: `Pol Milian`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/E_L_Pol`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/Polcius`,
      },
    ],
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
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
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
        name: `Pol Milian - Senior Font-End Engineer`,
        short_name: `Pol Milian`,
        start_url: `/`,
        background_color: `rgb(41, 211, 150);`,
        theme_color: `rgb(41, 211, 150);`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
  ],
};
