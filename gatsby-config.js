const {applyxslt} = require('./scripts/applyxslt')

module.exports = {
  pathPrefix: "/gatsby-ceteicean-workshop",
  siteMetadata: {
    title: `金沢文庫DB TEI/XMLデモサイト`,
    menuLinks: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "About",
        link: "/about"
      }
    ]
  },
  plugins: [
    // `gatsby-theme-ceteicean`, // USE THIS IF YOU DON'T NEED THE OPTIONS BELOW
    {
      resolve: `gatsby-theme-ceteicean`,
      options: {
        applyBefore: [(obj) => applyxslt(obj, "notenumbers.sef.json")],
        applyAfter: [],
        namespaces: {
          "http://www.tei-c.org/ns/1.0": "tei",
          "http://www.tei-c.org/ns/Examples": "teieg",
          "http://www.w3.org/2001/XInclude": "xi"
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `static/tei`,
      },
    },
    `gatsby-plugin-material-ui`
  ],
}
