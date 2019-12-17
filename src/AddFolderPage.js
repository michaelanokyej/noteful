import React from "react";
import noteAndFolderContext from "./context/noteAndFolderContext";

class AddFolderPage extends React.Component {
  state = {
    folder_name: '',
  }

  static contextType = noteAndFolderContext;

  render() {
    return (
      <section className="AddFolder">
        <h2>Create a folder</h2>
        <form className="Noteful-form" action="#">
          <div className="field">
            <label htmlFor="folder-name-input">Name</label>
            <input type="text" id="folder-name-input" 
            onChange={e => this.setState({ folder_name: e.target.value })}
            />
          </div>
          <div className="buttons">
            <button type="submit"
            onClick={() => {
              console.log("folder in add folder page", this.state.folder_name)
              this.context.addFolder(this.state.folder_name)}}
              >Add Folder</button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddFolderPage;
