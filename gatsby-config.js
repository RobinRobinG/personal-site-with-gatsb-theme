module.exports = {
  siteMetadata: {
    title: 'Robin Guan',
    author: 'Robin',
    description:
      'I’m Robin, a front-end developer with an eye for UI/UX design!',
    social: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/robinguan',
      },
      {
        name: 'github',
        url: 'https://github.com/RobinRobinG',
      },
      {
        name: 'email',
        url: 'hello@robinguan.com',
      },
    ],
  },
  plugins: [
    '@robinguan/gatsby-mdx-mui-theme',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
