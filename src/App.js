import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import ScrollToTop from "./Scrolltotop"

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Luoghi from "./pages/Luoghi"
import Articoli from "./pages/Articoli"
import Articolo from "./pages/Articolo"

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chisiamo" component={About} />
          <Route path="/luoghi" component={Luoghi} />
          <Route path="/articoli" exact component={Articoli} />
          <Route path="/articoli/:slug" component={Articolo} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
