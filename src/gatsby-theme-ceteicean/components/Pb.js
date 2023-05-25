import React from "react";
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior";

import "./pb.css";

const Pb = ({ teiNode }) => {
  const pb = teiNode;
  const n = pb.getAttribute("n") || "";

  if (n) {
    return (
      <Behavior node={teiNode}>
        <div className="Pb">
          Page {n}
        </div>
      </Behavior>
    );
  }
  return null;
};

export default Pb;
