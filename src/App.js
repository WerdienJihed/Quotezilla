import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Spinner from "react-bootstrap/Spinner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <div className="spinner-container">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="App">
          <Router>
            <Navigation />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
