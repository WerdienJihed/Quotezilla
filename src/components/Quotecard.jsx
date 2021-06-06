import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FacebookShareButton, FacebookIcon } from "react-share";

import "./../styles/quote-card.css";
function Quotecard(props) {
  return (
    <div className="d-grid gap-2">
      <Card className="bg-secondary">
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{props.quote}</p>
            <footer className="blockquote-footer text-warning">
              <cite title="Source Title">{props.source}</cite>{" "}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      <div className="buttons-container">
        <Button
          style={{ width: "100%" }}
          variant="primary"
          disabled={props.isLoading}
          onClick={props.isLoading ? null : props.handleClick}
        >
          {props.isLoading ? "Loading…" : "Generate"}
        </Button>
        <FacebookShareButton quote={props.quote} url="google.com">
          <FacebookIcon size={40} borderRadius={10} />
        </FacebookShareButton>
      </div>
    </div>
  );
}

export default Quotecard;
