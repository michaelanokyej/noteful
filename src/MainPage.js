import React from "react";
import { Route } from "react-router-dom";
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
        <Route
          exact
          path="/"
          component={MainBody}
        />
        <Route
          exact
          path="/notes/:noteId"
          component={NoteDetailsPage}
        />
        <Route
          exact
          path="/folders/:folderId"
          component={FolderDetailsPage}
        />

        <Route
          exact
          path="/add-note"
          component={AddNotePage}
          // previously
          // component={routeProps => (
          //   <AddNotePage
          //     {...routeProps}
          //     folders={this.props.folders}
          //     notes={this.props.notes}
          //   />
          // )}
        />

        <Route
          exact
          path="/add-folder"
          component={AddFolderPage}
          // previously
          // component={routeProps => (
          //   <AddFolderPage
          //     {...routeProps}
          //     folders={this.props.folders}
          //     notes={this.props.notes}
          //   />
          // )}
        />
      </main>
    );
  }
}

export default Mainpage;
