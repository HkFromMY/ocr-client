import React from 'react';
import "./index.css";

export function Heading({ text, tier }) {
  return <h3 className={"heading-3" + (tier ? " " + tier : "")}>{ text }</h3>
}

export default Heading
