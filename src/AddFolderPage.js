import React from "react";
import noteAndFolderContext from "./context/noteAndFolderContext";
import { Redirect } from "react-router-dom";


class AddFolderPage extends React.Component {
  state = {
    folder_name: '',
    routeToHome: false
  }

  static contextType = noteAndFolderContext;

  render() {
    return (
      <section className="AddFolder">
        {this.state.routeToHome && <Redirect to="/" />}
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
            onClick={(e) => {
              e.preventDefault()
              if (this.state.folder_name === null) {
                alert("Folder Name can not be empty")
              }
              else{this.context.addFolder(this.state.folder_name)
                this.setState({ routeToHome: true });}
              
            }}
              >Add Folder</button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddFolderPage;
