import React from "react";
import { Link, Route } from "react-router-dom";
import SideBarPage from "./SideBarPage";
import MainBody from "./MainBody";
import "./MainBody.css";

class Mainpage extends React.Component {
  render() {
    const folders = this.props.folders.map((folder, index) => {
      return (
        <ul>
          <li key={folder.index} className="folderLi">
            <Link to={folder.name}>{folder.name}</Link>
          </li>
        </ul>
      );
    });

    const notes = this.props.notes.map((note, index) => {
      return (
        <ul>
          <li key={note.index} className="noteLi">       
              <div className="noteInfo">
                <h3>
                  <Link to={note.name} className="noteHeader">{note.name}</Link>
                </h3>
                <p>Date modified on {note.modified}</p>
              </div>
              <button className="noteDeleteButton">remove</button>
          </li>
        </ul>
      );
    });

    return (
      <main className="mainBody">
        <SideBarPage folders={folders} />
        {/* <Route
            folders={folders}
            exact path='/'
            component={SideBarPage}
          /> */}
        <MainBody notes={notes} />
      </main>
    );
  }
}

export default Mainpage;
