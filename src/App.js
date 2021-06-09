import { useState, useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

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
        <LoadingSpinner />
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
