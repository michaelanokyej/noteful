import React from "react";
import { Link, Route } from "react-router-dom";

const MainBody = props => {
  const notes = props.notes.map((note, index) => {
    return (
      <li key={note.id} className="noteLi">
        <div className="noteInfo">
          <h3>
            <Link to={`/notes/${note.id}`} className="noteHeader">
              {note.name}
            </Link>
          </h3>
          <p>Date modified on {note.modified}</p>
        </div>
        <button className="noteDeleteButton">remove</button>
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
