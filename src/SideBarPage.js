import React from "react";
import { Link, Route } from "react-router-dom";

const SideBarPage = (props) => {

  const folders = props.folders.map((folder, index) => {
    return (
        <li key={folder.id} className="folderLi">
          <Link to={`/folders/${folder.id}`}>{folder.name}</Link>
        </li>
    );
  });

  console.log (props)
  return (
    <div className="sideBar">
      <ul>{folders}</ul>
      <button className="addFolderButton">+ Folder</button>
    </div>
  );
};

export default SideBarPage;
