import React from "react";
import { Form, Button } from "react-bootstrap/";

const QuestionForm = (props) => {
  console.log(props.editedQuestion);
  const { title, body, tag } = props.editedQuestion;
  return (
    <div id="question-form">
      <Form onSubmit={(e) => props.addQuestion(e)}>
        <Form.Group controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            value={title}
            type="text"
            placeholder="Title"
            onChange={props.editQuestion}
          />
        </Form.Group>
        <Form.Group controlId="formGroupBody">
          <Form.Label>Question</Form.Label>
          <Form.Control
            name="body"
            value={body}
            type="textarea"
            placeholder="Question"
            onChange={props.editQuestion}
          />
        </Form.Group>
        <Form.Group controlId="formGroupBody">
          <Form.Label>Language Type</Form.Label>
          <Form.Control
            name="tag"
            value={tag}
            type="text"
            placeholder="example: Java Script"
            onChange={props.editQuestion}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
      </Form>
      <br />
    </div>
  );
};

export default QuestionForm;
