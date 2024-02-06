import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit } from "../redux/action";

const EditTask = ({ el }) => {
  const dispatch = useDispatch();
  const [action, setAction] = useState(el.action);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleedit = (e) => {
    e.preventDefault();
    const newedit = {
      id: el.id,
      action: action,
      isDone: el.isDone,
    };
    action.trim() === ""
      ? alert("zid 7ata 7arf a bo5ly")
      : dispatch(edit(newedit));
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "25px",
            }}
            onSubmit={handleedit}
          >
            <Form.Control
              type="text"
              placeholder="Enter your todo"
              style={{ width: "80%" }}
              value={action}
              onChange={(e) => setAction(e.target.value)}
            />
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
