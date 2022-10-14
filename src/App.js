import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import GithubState from "./context/github/GithubState";

/* Import Component */
import Home from "./components/pages/Home";
import UserDetail from "./components/user/UserDetail";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
      <header>Github Search</header>

      <GithubState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/user/:login" element={<UserDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </GithubState>
    </div>
  );
}

export default App;
