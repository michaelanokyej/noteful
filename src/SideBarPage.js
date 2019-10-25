import React from "react";
import { Link, Route } from "react-router-dom";
import './MainBody.css';
import HomeSideBar from "./HomeSideBar";
import NoteSideBar from "./NoteSideBar";
import FolderHomeSideBar from "./FolderHomeSideBar";
import NewAddPageNav from "./NewAddPageNav";
import './SideBar.css';



const SideBarPage = (props) => {

//   const folders = props.folders.map((folder, index) => {
//     return (
//         <li key={folder.id} className="folderLi">
//           <Link to={`/folders/${folder.id}`} className="NoteListNav__folder-link">{folder.name}</Link>
//         </li>
//     );
//   });

//   // console.log (props)
//   return (
//     <div className='NoteListNav'>
//       <ul className='NoteListNav__list'>{folders}</ul>
//       {/* <button className="addFolderButton">+ Folder</button> */}
//       <Link to="/add-folder"  >
// <button className="addFolderButton">
//     + Folder
// </button>
//     </Link>
//     </div>
//   );

return (
  <nav className="App__nav">

  <Route
  exact
  path="/"
  component={routeProps => (
    <HomeSideBar
      {...routeProps}
      notes={props.notes}
      folders={props.folders}
    />
  )}
/>


<Route
  exact
  path="/notes/:noteId"
  component={routeProps => (
    <NoteSideBar
      {...routeProps}
      notes={props.notes}
      folders={props.folders}
    />
  )}
/>

<Route
  exact
  path="/folders/:folderId"
  component={routeProps => (
    <FolderHomeSideBar
      {...routeProps}
      notes={props.notes}
      folders={props.folders}
    />
  )}
/>

<Route
  path={["/add-folder", "/add-note"]}
  component={
    NewAddPageNav
  }
/>
</nav>
)
};

export default SideBarPage;
