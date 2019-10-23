import React from "react";
import { Link, Route } from "react-router-dom";
import SideBarPage from "./SideBarPage";
import MainBody from "./MainBody";
import NoteDetailsPage from "./NoteDetailsPage";
import FolderDetailsPage from "./FolderDetailsPage";
import AddNotePage from "./AddNotePage";
import AddFolderPage from "./AddFolderPage";
import "./MainBody.css";

class Mainpage extends React.Component {
  render() {
    return (
      <main className="App__main">
        {/* <SideBarPage folders={this.props.folders} /> */}
        {/* <SideBarPage folders={folders} /> */}
        <Route
          // folders={folders}
          exact
          path="/"
          component={routeProps => (
            <MainBody
              {...routeProps}
              notes={this.props.notes}
              folders={this.props.folders}
            />
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

        <Route
          exact
          path="/add-note"
          component={routeProps => (
            <AddNotePage
              {...routeProps}
              folders={this.props.folders}
              notes={this.props.notes}
            />
          )}
        />

        <Route
          exact
          path="/add-folder"
          component={routeProps => (
            <AddFolderPage
              {...routeProps}
              folders={this.props.folders}
              notes={this.props.notes}
            />
          )}
        />
      </main>
    );
  }
}

export default Mainpage;
