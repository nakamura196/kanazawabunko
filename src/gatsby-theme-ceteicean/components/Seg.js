import React from "react";
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior";
import { TEINodes } from "react-teirouter";

import LinkIcon from "@mui/icons-material/Link";

const Seg = (props) => {
  const seg = props.teiNode;
  const corresp = seg.getAttribute("corresp");
  const href =
    "https://kouigenjimonogatari.github.io/snorql/?describe=" + corresp;

  return (
    <Behavior node={props.teiNode}>
      <a href={href} target="_blank" style={{ marginRight: 8 }}>
        <LinkIcon></LinkIcon>
      </a>

      <TEINodes teiNodes={props.teiNode.childNodes} {...props} />
    </Behavior>
  );
};

export default Seg;
