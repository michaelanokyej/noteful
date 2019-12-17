import React from "react";
import './AddNotePage.css'
import noteAndFolderContext from "./context/noteAndFolderContext";
// import AddNoteButton from "./AddNoteButton";


class AddNotePage extends React.Component {
  state = {
    folderId: '',
    content: '',
    note_name: ''
  }
  static contextType = noteAndFolderContext;

  render() {
    // console.log("context", this.context)
    // console.log("props", this.props)

    const foldersOptions = this.context.folders.map((folder, index) => {
      return (
        <option key={folder.id} value={folder.id}>
          {folder.folder_name}
        </option>
      );
    });

    const noteBody = {
      folder_id: this.state.folderId,
    content: this.state.content,
    note_name: this.state.note_name
    }
    return (
      <section className="AddNote">
        <h2>Create a note</h2>
        {/* Using the POST methos to update server  */}
        <form className="Noteful-form" action="#" >
          <div className="field">
            <label htmlFor="note-name-input">Name</label>
            <input type="text" id="note-name-input" 
            onChange={e => this.setState({ note_name: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="note-content-input">Content</label>
            <textarea type="text" id="note-content-input"
            onChange={e => this.setState({ content: e.target.value })}
            ></textarea>
          </div>
          <div className="field">
            <label htmlFor="note-folder-input">
              Folder
            </label>
            <select id="note-folder-select" 
            onChange={e => this.setState({ folderId: e.target.value })}
            >
              {foldersOptions}
            </select>
          </div>
          <div className="buttons">
            {/* Add the add note fetch here  */}
            {/* onClick={this.context.addNote(this.state)} */}
            <button type="submit" onClick={() => {
              console.log("note body in add note page", noteBody)
              this.context.addNote(noteBody)}}>
              Add note
            </button>
            {/* <AddNoteButton noteBody={this.state}/> */}
          </div>
        </form>
      </section>
    );
  }
}

export default AddNotePage;