import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

function Apilistgroup(props) {
  const [activeKey, setActiveKey] = useState("famousQuotesApi");
  const handleSelect = props.handleSelect;
  return (
    <ListGroup
      activeKey={activeKey}
      onSelect={(selectedKey) => {
        handleSelect(selectedKey);
        setActiveKey(selectedKey);
      }}
      style={{ marginBottom: "1rem" }}
    >
      <ListGroup.Item action eventKey="famousQuotesApi">
        Famous
      </ListGroup.Item>
      <ListGroup.Item action eventKey="moviesQuotesApi">
        movies/tv shows
      </ListGroup.Item>
      <ListGroup.Item action eventKey="motivationalQuotesApi">
        Motivational and inspirational
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Apilistgroup;
