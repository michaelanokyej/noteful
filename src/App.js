import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import SideBarPage from "./SideBarPage";

class App extends React.Component {
  // state = {
  //   notes: this.props.store.notes,
  //   folders: this.props.store.folders
  // };

  state = {
    notes: [],
    folders: []
};

componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(this.props.store), 600);
}

  render() {
    return (
      // <Route>
      // <div className="App">
      //   <header className="appHeader">
      //     <Link to="/">
      //       <h1>Noteful</h1>
      //     </Link>
      //   </header>
      //   <MainPage 
      //   notes={this.state.notes} 
      //   folders={this.state.folders}
      //   />
      // </div>

      <div className="App">
      <nav className="App__nav">
        <SideBarPage folders={this.state.folders} />
      </nav>
      <header className="App__header">
          <h1>
              <Link to="/">Noteful</Link>{' '}
          </h1>
      </header>
      <MainPage 
         notes={this.state.notes} 
         folders={this.state.folders}
      />
  </div>
    );
  }
}

export default App;
