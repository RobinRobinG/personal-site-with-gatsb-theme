module.exports = {
  siteMetadata: {
    title: "😀 Robin Guan",
    author: "Robin",
    description: "I’m Robin and I’m a full-stack developer, UI/UX designer!",
    social: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/robinguan",
      },
      {
        name: "github",
        url: "https://github.com/RobinRobinG",
      },
      {
        name: "email",
        url: "hello@robinguan.com",
      },
      {
        name: "website",
        url: "https://robinrobing.github.io",
      },
    ],
  },
  plugins: [
    "@robinguan/gatsby-mdx-mui-theme",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
