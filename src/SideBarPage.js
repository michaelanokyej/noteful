import React from "react";
import { Link, Route } from "react-router-dom";

const SideBarPage = props => {
  return (
    <div className="sideBar">
      {props.folders}
      <button className="addFolderButton">+ Folder</button>
    </div>
  );
};

export default SideBarPage;
