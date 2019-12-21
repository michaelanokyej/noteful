import React from "react";

const noteAndFolderContext = React.createContext({
  notes: [],
  folders: [],
  addFolder: () => {},
  addNote: () => {},
  deleteNote: () => {},
  updateNote: () => {}
});

export default noteAndFolderContext;
