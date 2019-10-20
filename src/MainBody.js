import React from "react";
import { Link, Route } from "react-router-dom";

const MainBody = props => {
  return (
    <div className="mainPage">
      {props.notes}
      <button className="addNoteButton">+ Note</button>
    </div>
  );
};

export default MainBody;
