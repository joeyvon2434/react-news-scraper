import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import NavTabs from "./pages/NavTabs";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/saved" component={SavedPage} />
        </div>
      </Router>
    )
  }
}

export default App;
