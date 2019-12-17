import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "./MainBody.css";
import RemoveButton from "./RemoveButton";
import noteAndFolderContext from "./context/noteAndFolderContext";

// import Note from './Note';

class MainBody extends React.Component {
  static contextType = noteAndFolderContext;



  render() {
    // console.log("context in mainbody", this.context.notes)
    const notes = this.context.notes.map((note, index) => {
      return (
        <li key={note.id}>
          <div className="Note">
            <h2 className="Note__title">
              <Link to={`/notes/${note.id}`}>{note.note_name}</Link>
            </h2>
            <RemoveButton id={note.id}/>
            <div className="Note__dates">
              <div className="Note__dates-modified">
                Modified{" "}
                <span className="Date">
                  {format(new Date(note.modified), "dd MMM yyyy")}
                </span>
              </div>
            </div>
          </div>
        </li>
      );
    });

    return (
      <section className="NoteListMain">
        <ul>{notes}</ul>
        <Link to="/add-note">
          <button className="addNoteButton">+ Note</button>
        </Link>
      </section>
    );
  }
}

export default MainBody;
