import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

/* Import State */
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

/* Import Component */
import Home from "./components/pages/Home";
import UserDetail from "./components/user/UserDetail";

import NotFound from "./components/pages/NotFound";

/* Import Layoyt */
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";

function App() {
  return (
      <GithubState>
        <AlertState>
          <Alert />
          <Router>
            <div className="App">
              <Navbar title="Github Finder" icon="fab fa-github" />
              <div className="container">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/user/:login" element={<UserDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
  );
}

export default App;
