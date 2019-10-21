import React from "react";
import { Link, Route } from "react-router-dom";
import SideBarPage from "./SideBarPage";
import MainBody from "./MainBody";
import NoteDetailsPage from "./NoteDetailsPage";
import FolderDetailsPage from "./FolderDetailsPage";
import "./MainBody.css";

class Mainpage extends React.Component {
  render() {
    return (
      <main className="mainBody">
        <SideBarPage folders={this.props.folders} />
        {/* <SideBarPage folders={folders} /> */}
        <Route
          // folders={folders}
          exact
          path="/"
          component={routeProps => (
            <MainBody {...routeProps} notes={this.props.notes} />
          )}
        />
        <Route
          exact
          path="/notes/:noteId"
          component={routeProps => (
            <NoteDetailsPage {...routeProps} notes={this.props.notes} />
          )}
        />
        <Route
          exact
          path="/folders/:folderId"
          component={routeProps => (
            <FolderDetailsPage
              {...routeProps}
              folders={this.props.folders}
              notes={this.props.notes}
            />
          )}
        />
        {/* <MainBody notes={notes} /> */}
      </main>
    );
  }
}

export default Mainpage;
