import React from "react";
import { Link } from "react-router-dom";
import './AddNotePage.css'

class AddNotePage extends React.Component {
  render() {
    const foldersOptions = this.props.folders.map((folder, index) => {
      return (
        <option key={folder.id} value={folder.id}>
          {folder.name}
        </option>
      );
    });
    return (
      <section className="AddNote">
        <h2>Create a note</h2>
        <form className="Noteful-form" action="#">
          <div className="field">
            <label htmlFor="note-name-input">Name</label>
            <input type="text" id="note-name-input" />
          </div>
          <div className="field">
            <label htmlFor="note-content-input">Content</label>
            <textarea type="text" id="note-content-input"></textarea>
          </div>
          <div className="field">
            <label htmlFor="note-folder-input">
              Folder
            </label>
            <select id="note-folder-select">
              {foldersOptions}
            </select>
          </div>
          <div className="buttons">
            <button type="submit">
              Add note
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddNotePage;