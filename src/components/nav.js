import React from "react";
import { Link } from "gatsby";
// import "./nav.css"

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Nav = ({ location, title, menuLinks }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{ color: "inherit" }} to="/">
            {title}
          </Link>
        </Typography>

        {menuLinks.map((m) => (
          <Button
            color="inherit"
            key={m.name}
            className={location === m.name.toLowerCase() ? "active" : ""}
          >
            <Link style={{ color: "inherit" }} to={m.link}>
              {m.name}
            </Link>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
