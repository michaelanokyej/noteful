import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import noteAndFolderContext from "./context/noteAndFolderContext";
import RemoveButton from "./RemoveButton";

import "./FolderDetailsPage.css";
import "./MainBody.css";
// import NoteSideBar from "./NoteSideBar";

class FolderDetailsPage extends React.Component {
  static contextType = noteAndFolderContext;

  render() {
    // take the id from the url
    const id = this.props.match.params.folderId;

    // find the note who id match the one against
    const folder = this.context.folders.find(el => el.id === id);

    // show notes that belong to this folder
    const notes = this.context.notes.filter(el => el.folderId === id);

    // if no note, we show a 404
    if (!folder) {
      return (
        <div>
          <h1>404</h1>
        </div>
      );
    }

    return (
      <div className="folderDiv">
        {/* <div>
        <h1>{folder.name}</h1>
      </div> */}
        <div>
          <ul>
            {notes.map(note => (
              <li key={note.id}>
                <div className="Note">
                  <h2 className="Note__title">
                    <Link to={`/notes/${note.id}`}>{note.name}</Link>
                  </h2>
                  {/* <button className="Note__delete" type="button">
                    remove
                  </button> */}
                  <RemoveButton />
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
            ))}
          </ul>
        </div>
        {/* <button className="addNoteButton">+ Note</button> */}
        <Link to="/add-note">
          <button className="addNoteButton">+ Note</button>
        </Link>
      </div>
    );
  }
}

export default FolderDetailsPage;
