import React, { useEffect } from "react";
import Ceteicean from "gatsby-theme-ceteicean/src/components/Ceteicean";
import {
  Tei,
  TeiHeader,
} from "gatsby-theme-ceteicean/src/components/DefaultBehaviors";
import Pb from "./Pb";
import Note from "./Note";
import PlaceName from "./PlaceName";
import PersName from "./PersName";
import Date from "./Date";
import Seg from "./Seg";
import Layout from "../../components/layout";

import "./ceteicean.css";
import "./style.css";

const MyCeteicean = ({ pageContext }) => {
  const routes = {
    "tei-tei": Tei,
    "tei-teiheader": TeiHeader,
    "tei-note": Note,
    "tei-placename": PlaceName,
    "tei-persname": PersName,
    "tei-date": Date,
    "tei-seg": Seg,
    "tei-pb": (props) => <Pb {...props} />,
  };

  useEffect(() => {
    const mouseWheel = document.querySelector(".box-scroll");
    mouseWheel.addEventListener("wheel", function (e) {
      const race = 100; // How many pixels to scroll

      if (e.deltaY > 0)
        // Scroll right
        mouseWheel.scrollLeft -= race;
      // Scroll left
      else mouseWheel.scrollLeft += race;
      e.preventDefault();
    });
  }, []);

  return (
    <Layout>
      <div
        className="box-scroll"
        style={{
          
        }}
      >
        <Ceteicean pageContext={pageContext} routes={routes} />
      </div>
    </Layout>
  );
};

export default MyCeteicean;
