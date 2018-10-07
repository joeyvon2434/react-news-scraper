import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import NavTabs from "./pages/NavTabs";
import "./index.css";
import Footer from "./components/Footer"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="site-wrapper">
          <div className="header-section">
            <NavTabs />
            <h1 className="main-title">New York Times Summary</h1>
          </div>
          <div className="content-wrapper">
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/saved" component={SavedPage} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
