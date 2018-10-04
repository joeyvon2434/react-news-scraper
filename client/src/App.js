import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import NavTabs from "./pages/NavTabs";
import "./index.css";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          <div className="content-wrapper">
            <h1 className="main-title">New York Times Summary</h1>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/saved" component={SavedPage} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
