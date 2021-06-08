import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./../styles/api-list.css";

function Apilistgroup(props) {
  const [activeKey, setActiveKey] = useState("0");
  return (
    <ListGroup
      className="api-list"
      activeKey={activeKey}
      onSelect={(selectedKey) => {
        props.handleSelect(selectedKey);
        setActiveKey(selectedKey);
      }}
    >
      <ListGroup.Item action eventKey="0">
        movies and tv shows quotes
      </ListGroup.Item>
      <ListGroup.Item action eventKey="1">
        Famous quotes
      </ListGroup.Item>
      <ListGroup.Item action eventKey="2">
        Motivational and inspirational quotes
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Apilistgroup;
