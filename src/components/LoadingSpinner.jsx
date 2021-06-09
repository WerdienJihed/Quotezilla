import Spinner from "react-bootstrap/Spinner";
import "./../styles/loading-spinner.css";
function LoadingSpinner() {
  return (
    <div>
      <div className="container">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
}

export default LoadingSpinner;
