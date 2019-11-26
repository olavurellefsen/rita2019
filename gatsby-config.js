module.exports = {
  pathPrefix: `/gatsby-starter-hyperspace/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: '#rita1tíma',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'rita1tíma',
        short_name: 'rita1tíma',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112926113-2",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "rita.fo",
      },
    },    
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
