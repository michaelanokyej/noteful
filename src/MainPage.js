import React from "react";
import { Link, Route } from "react-router-dom";
import './MainPage.css';

class MainPage extends React.Component {
  
  render() {
    console.log(this.props);

    const folders = this.props.store.folders.map((folder, index) => {
      return (
          <ul>
            <li key={folder.index} className="folderLi">
              <Link to={folder.name}>{folder.name}</Link>
            </li>
          </ul>
      );
    });

    const notes = this.props.store.notes.map((note, index) => {
      return (
        <ul>
          <li key={note.index} className="noteLi">
            <h3>
              <Link to={note.name}>{note.name}</Link>
            </h3>
            <p>Date modified on {note.modified}</p>
            <button className="noteDeleteButton">Delete Note</button>
          </li>
        </ul>
      );
    });

    return (
      <main className="mainBody">
        <div className="sideBar">
        {folders}
        <button className="addFolderButton">Add Folder</button>        
        </div>
        <div className="mainPage">
        {notes}
        <button className="addNoteButton">Add Note</button>                
        </div>
      </main>
    );
  }
}

export default MainPage;
