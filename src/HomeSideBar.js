import React from "react";
import { Link, Route } from "react-router-dom";
import noteAndFolderContext from "./context/noteAndFolderContext";
import "./MainBody.css";

class HomeSideBar extends React.Component {
  static contextType = noteAndFolderContext;

  render() {
    const folders = this.context.folders.map((folder, index) => {
      return (
        <li key={folder.id} className="folderLi">
          <Link
            to={`/folders/${folder.id}`}
            className="NoteListNav__folder-link"
          >
            {folder.name}
          </Link>
        </li>
      );
    });

    // console.log (props)
    return (
      <div className="NoteListNav">
        <ul className="NoteListNav__list">{folders}</ul>
        {/* <button className="addFolderButton">+ Folder</button> */}
        <Link to="/add-folder">
          <button className="addFolderButton">+ Folder</button>
        </Link>
      </div>
    );
  }
}

export default HomeSideBar;
