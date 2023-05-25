import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import Popup from "../../components/popup"

import "./date.css"

const Date = (props) => {

  const date = props.teiNode

  const target = date.getAttribute("corresp")
  let persText = date.textContent
  if (target) {
    const id = target.replace('#', '')
    const pers = date.ownerDocument.getElementById(id)
    if (pers) {
      persText = pers.textContent
    }
  }

  const [popupOn, setPopupOn] = React.useState(false)
  let popup = null

  const togglePopup = () => {
    setPopupOn(!popupOn)
  }

  if (popupOn) {
    popup = <Popup toggle={togglePopup} title={persText}>
    </Popup>
  }

  return <Behavior node={props.teiNode}>
    <span onClick={togglePopup} className="Date">
      <TEINodes
        teiNodes={props.teiNode.childNodes}
        {...props} />
    </span>
    {popup}
  </Behavior>
}

export default Date
