import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actionType";
import { add } from "../redux/action";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    const newtexte = {
      id: Math.random(),
      action: text,
      isDone: false,
    };
    text.trim() === "" ? alert("ekteb 7kaya a bo5ly") : dispatch(add(newtexte));
  };
  return (
    <div>
      <Button className="button">TODO APP</Button>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "25px" }}
      >
        <Form
          style={{ display: "flex", justifyContent: "center", margin: "25px" }}
          onSubmit={handlesubmit}
        >
          <Form.Control
            type="text"
            placeholder="Enter your todo"
            style={{ width: "80%" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddTask;
