import React from "react";

const AddFolderPage = () => {
  return (
    <section className="AddFolder">
      <h2>Create a folder</h2>
      <form className="Noteful-form" action="#">
        <div className="field">
          <label htmlFor="folder-name-input">Name</label>
          <input type="text" id="folder-name-input"/>
        </div>
        <div className="buttons">
            <button type="submit">
              Add Folder
            </button>
          </div>
      </form>
    </section>
  )
}

export default AddFolderPage;