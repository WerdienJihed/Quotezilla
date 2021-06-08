import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function CustomModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>See you tomorrow :D </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        sorry about that ! this API gives only one new quote every day.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
