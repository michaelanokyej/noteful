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
        <form className="Noteful-form" action="#" noValidate>
          <div className="field">
            <label htmlFor="folder-name-input">Name</label>
            <input type="text" id="folder-name-input" required
            onChange={e => this.setState({ folder_name: e.target.value })}
            />
          </div>
          <div className="buttons">
            <button type="submit"
            onClick={(e) => {
              e.preventDefault()
              if (this.state.folder_name.length === 0) {
                // console.log("folder is empty")
                window.alert("Folder name is empty. Please add a folder name before submitting")
              }else
              {
                this.context.addFolder(this.state.folder_name)
              this.setState({ routeToHome: true });
              }
              
            }}
              >Add Folder</button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddFolderPage;
