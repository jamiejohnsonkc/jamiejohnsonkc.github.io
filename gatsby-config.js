module.exports = {
  siteMetadata: {
    title: `jamiejohnsonkc2021`,
    description: `portfolio page`,
    author: `@jamiejohnsonkc`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.15, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Spectral: 300,400,600,700',
            'Source Sans Pro: 200,300,400,600,700,900',
            'Source Code Pro',
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        name: 'svg',
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-theme-nav-fulloverlay`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-jim-theme-ui`,
    `gatsby-theme-jim-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
