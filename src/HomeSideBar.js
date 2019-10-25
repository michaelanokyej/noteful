import React from "react";
import { Link, Route } from "react-router-dom";
import './MainBody.css';

const HomeSideBar = (props) => {
  const folders = props.folders.map((folder, index) => {
    return (
        <li key={folder.id} className="folderLi">
          <Link to={`/folders/${folder.id}`} className="NoteListNav__folder-link">{folder.name}</Link>
        </li>
    );
  });

  // console.log (props)
  return (
    <div className='NoteListNav'>
      <ul className='NoteListNav__list'>{folders}</ul>
      {/* <button className="addFolderButton">+ Folder</button> */}
      <Link to="/add-folder"  >
<button className="addFolderButton">
    + Folder
</button>
    </Link>
    </div>
  );
}

export default HomeSideBar;