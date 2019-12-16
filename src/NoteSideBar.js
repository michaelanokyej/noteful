import React from "react";
import { Link } from "react-router-dom";
import noteAndFolderContext from "./context/noteAndFolderContext";
import "./MainBody.css";
import "./SideBar.css";

class NoteSideBar extends React.Component {
  static contextType = noteAndFolderContext;

  render() {
    // take the id from the url
    const UrlNoteId = Number(this.props.match.params.noteId);
    // console.log("urlNoteId", UrlNoteId)
    // console.log("props", this.props)
    //   console.log("context", this.context)
    // find the note who id match the one against
    const note = this.context.notes.find(el => el.id === UrlNoteId);

    // find the folder id that matches the folder id of the note id in url
    // console.log(folder);

    // show notes that belong to this folder
    // const notes = props.notes.filter(el => el.folderId === id);
    // if no note, we show a 404
    if (!note) {
      return (
        <div>
          <h1>404</h1>
        </div>
      );
    }

    
    const folder = this.context.folders.filter(el => el.id === Number(note.folder_id));
    // console.log("props", props)

    // return a route to the root page 
    if (folder.length === 0) {
      return (
        <div>
          <h1>404</h1>
        </div>
      );
    }
    return (
      <div className="NotePageNav">
        <Link to="/">
          <button className="NavCircleButton NotePageNav__back-button">
            Back
          </button>
        </Link>
        <h3 className="NotePageNav__folder-name">{folder[0].folder_name}</h3>
      </div>
    );
  }
}

export default NoteSideBar;
