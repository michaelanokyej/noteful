import React from "react";
import { Link, Route } from "react-router-dom";
import './MainBody.css';
import './SideBar.css';

const NoteSideBar = (props) => {

  // take the id from the url
  const UrlNoteId = props.match.params.noteId;

  // find the note who id match the one against
  const note = props.notes.find(el => el.id === UrlNoteId);

  // find the folder id that matches the folder id of the note id in url
  const folder = props.folders.filter(el => el.id === note.folderId);
  console.log(folder);

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


  console.log("props", props)
  return (
    <div className="NotePageNav">
      <Link to="/">
        <button className="NavCircleButton NotePageNav__back-button">
          Back
        </button>
      </Link>
      <h3 className="NotePageNav__folder-name">{folder[0].name}</h3>
    </div>
  )
}

export default NoteSideBar;

