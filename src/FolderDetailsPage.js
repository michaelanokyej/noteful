import React from "react";
import { Link } from "react-router-dom";
import "./FolderDetailsPage.css";
import "./MainBody.css";

const FolderDetailsPage = props => {
  // take the id from the url
  const id = props.match.params.folderId;

  // find the note who id match the one against
  const folder = props.folders.find(el => el.id === id);

  // show notes that belong to this folder
  const notes = props.notes.filter(el => el.folderId === id);

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
      <div>
        <h1>{folder.name}</h1>
      </div>
      <div>
        <ul>
          {notes.map(note => (
            <li key={note.id}>
              <div className="noteList">
              <div>
                <h2>
                  <Link to={`/notes/${note.id}`} className="note-folder-Header">{note.name}</Link>
                </h2>
              </div>
              <div className="modified">
                Modified <span>{note.modified}</span>
              </div>
              </div>
              
              <button className="removeButton">remove</button>
            </li>
          ))}
        </ul>
      </div>
      <button className="addNoteButton">+ Note</button>
    </div>
  );
};

export default FolderDetailsPage;
