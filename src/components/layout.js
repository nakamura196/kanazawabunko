import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Container from "@mui/material/Container";
import Head from "./head";
import Nav from "./nav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./layout.css";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      機能検証を目的としたデモサイトです。
    </Typography>
  );
}

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteInfoQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);
  const { title, menuLinks } = data.site.siteMetadata;
  return (
    <>
      <Head title={title} />
      <Nav location={location || ""} title={title} menuLinks={menuLinks} />
      <Container>
        <main className="Content">{children}</main>
      </Container>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/*<footer className="Footer">Gastby CETEIcean Workshop - TEI Members Meeting and Conference 2022 - Code license: MIT - Contents license: CC-A-NC-SA 4.0</footer> */}
    </>
  );
};

export default Layout;
