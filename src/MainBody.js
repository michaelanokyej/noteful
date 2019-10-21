import React from "react";
import { Link, Route } from "react-router-dom";

const MainBody = props => {
  const notes = props.notes.map((note, index) => {
    return (
      <li key={note.id} className="noteLi">
        <div className="noteInfo">
          <h3>
            <Link to={`/notes/${note.id}`} className="note-folder-Header">
              {note.name}
            </Link>
          </h3>
          <div className="modified">
            Modified <span>{note.modified}</span>
          </div>
        </div>
        <button className="removeButton">remove</button>
      </li>
    );
  });

  return (
    <div className="mainPage">
      <ul>{notes}</ul>
      <button className="addNoteButton">+ Note</button>
    </div>
  );
};

export default MainBody;
