import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

/* Import Component */
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
      <header>Github Search</header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
