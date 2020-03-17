import themeOriginal from '@robinguan/gatsby-mdx-mui-theme/src/theme'

const theme = {
  ...themeOriginal,
  palette: {
    ...themeOriginal.palette,
    primary: {
      ...themeOriginal.palette.primary,
      light: '#cfcfcf',
    },
  },
  typography: {
    ...themeOriginal.typography,
    h5: {
      fontSize: '2rem',
      fontWeight: '300',
      color: '#6C63FF',
      lineHeight: '4rem',
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: '300',
      color: '#6C63FF',
      lineHeight: '4rem',
    },
  },

  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       body: {
  //         backgroundImage:
  //           "url(https://source.unsplash.com/random/1024x768?sky)",
  //         backgroundRepeat: "no-repeat",
  //         backgroundPosition: "center center",
  //         backgroundSize: "cover",
  //         backgroundAttachment: "fixed",
  //         height: "100%",
  //       },
  //     },
  //   },
  // },
}
export default theme
