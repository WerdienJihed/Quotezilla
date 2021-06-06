import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Spinner from "react-bootstrap/Spinner";

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
          <Navigation />
          <Header />
        </div>
      )}
    </div>
  );
}

export default App;
