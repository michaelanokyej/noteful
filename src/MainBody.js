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
    const notes = this.context.notes.map((note, index) => {
      return (
        // My map
        // <li key={note.id} className="noteLi">
        //   <div className="noteInfo">
        //     <h3>
        //       <Link to={`/notes/${note.id}`} className="note-folder-Header">
        //         {note.name}
        //       </Link>
        //     </h3>
        //     <div className="modified">
        //       Modified <span>{note.modified}</span>
        //     </div>
        //   </div>
        //   <button className="removeButton">remove</button>
        // </li>

        <li key={note.id}>
          <div className="Note">
            <h2 className="Note__title">
              <Link to={`/notes/${note.id}`}>{note.note_name}</Link>
            </h2>
            <button className="Note__delete" type="button">
              remove
            </button>
            {/* <RemoveButton /> */}
            <div className="Note__dates">
              <div className="Note__dates-modified">
                Modified{" "}
                <span className="Date">
                  {/* {format(new Date(note.modified), "dd MMM yyyy")} */}
                </span>
              </div>
            </div>
          </div>
        </li>
      );
    });

    return (
      // My return
      // <div className="mainPage">
      //   <ul>{notes}</ul>
      //   <button className="addNoteButton">+ Note</button>
      // </div>

      // Thinkful's return
      <section className="NoteListMain">
        <ul>{notes}</ul>
        {/* <button className="addNoteButton"> */}
        <Link to="/add-note">
          <button className="addNoteButton">+ Note</button>
        </Link>
        {/* </button> */}
      </section>
    );
  }
}

export default MainBody;
