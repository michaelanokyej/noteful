import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";

class App extends React.Component {
  state = {
    store: this.props.store
  };

  render() {
    return (
      // <Route>
      <div className="App">
        <header className="appHeader">
          <Link to="/">
            <h1>Noteful</h1>
          </Link>
        </header>
        <MainPage store={this.props.store}/>
      </div>
    );
  }
}

export default App;
