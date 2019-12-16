import React from "react";
import { Link, Route } from "react-router-dom";

const Note = (props) => {
  return (
    <li key={note.id} className="noteLi">
      <div className="noteInfo">
        <h3>
          <Link to={`/notes/${note.id}`} className="note-folder-Header">
            {note.note_name}
          </Link>
        </h3>
        <div className="modified">
          Modified 
          <span>{note.modified}</span>
        </div>
      </div>
      <button className="removeButton">remove</button>
    </li>
  );
}

export default Note;