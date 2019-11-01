import React from "react";
import { Route } from "react-router-dom";
import './MainBody.css';
import HomeSideBar from "./HomeSideBar";
import NoteSideBar from "./NoteSideBar";
// import FolderHomeSideBar from "./FolderHomeSideBar";
import NewAddPageNav from "./NewAddPageNav";
import './SideBar.css';



const SideBarPage = (props) => {
return (
  <nav className="App__nav">

  <Route
  exact
  // path="/"
  path={["/", "/folders/:folderId"]}
  component={HomeSideBar}
  // previously
  // component={routeProps => (
  //   <HomeSideBar
  //     {...routeProps}
  //     notes={props.notes}
  //     folders={props.folders}
  //   />
  // )}
/>


<Route
  exact
  path="/notes/:noteId"
  component={NoteSideBar}
  // previously
  // component={routeProps => (
  //   <NoteSideBar
  //     {...routeProps}
  //     notes={props.notes}
  //     folders={props.folders}
  //   />
  // )}
/>


<Route
  path={["/add-folder", "/add-note"]}
  component={NewAddPageNav}/>
</nav>
)
};

export default SideBarPage;
