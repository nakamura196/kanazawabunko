import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import Popup from "../../components/popup"

import "./persname.css"

const PersName = (props) => {

  const persName = props.teiNode

  const target = persName.getAttribute("corresp")
  let persText = persName.textContent
  let ref = null
  if (target) {
    const id = target.replace('#', '')
    const pers = persName.ownerDocument.getElementById(id)
    if (pers) {
      persText = pers.textContent
      ref = pers
    }
  }

  const [popupOn, setPopupOn] = React.useState(false)
  let popup = null

  const togglePopup = () => {
    setPopupOn(!popupOn)
  }

  if (popupOn) {
    popup = <Popup toggle={togglePopup}>
      { ref && <TEINodes 
        teiNodes={ref.childNodes}
        {...props}/> }
    </Popup>
  }

  return <Behavior node={props.teiNode}>
    <span onClick={togglePopup} className="PersName">
      <TEINodes
        teiNodes={props.teiNode.childNodes}
        {...props} />
    </span>
    {popup}
  </Behavior>
}

export default PersName
