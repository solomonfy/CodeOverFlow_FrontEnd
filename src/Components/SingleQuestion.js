import React from "react";
import { Button, Card } from "react-bootstrap/";
import { Link } from "react-router-dom";

class SingleQuestion extends React.Component {
  redirectToHomepage = () => {
    this.props.history.push("/");
  };

  render() {
    let question = this.props.question;
    let answers_count = question.answers.length;

    let answers = question.answers.map((answer) => (
      <Link
        to="/answer"
        // onClick={this.props.getAnswer(question)}
      >
        <li>{answer.body}</li>
        <br />
      </Link>
    ));

    return (
      <div id="single-question">
        {/* <Card> */}
        {/* <p>Username: {question.user.username}</p> */}
        <br />
        <br />
        <h6>
          {" "}
          <strong>Title: {question.title}</strong>
        </h6>
        <br/>
        <p>Body: {question.body}</p>
        <p>
          <strong>Tag: </strong>
          {question.tag}
        </p>
        <br />
        {answers_count > 0 ? (
          <p>
            Answers: <br />
            <br />
            {/* {answers} */}
            <Link to="/answer">{answers} </Link>
          </p>
        ) : null}
        <Button
          id="add-answer"
          variant="light"
          size="sm"
          onClick={() => this.props.clickedQuestion(question)}
        >
          <Link to="/edit_question"> edit question</Link>
        </Button>{" "}
        <Button
          id="add-answer"
          variant="light"
          size="sm"
          // onClick={this.props.currentQuestion}
        >
          <Link to="/add_answer">Add answer</Link>
        </Button>{" "}
        <Button
          id="delete-question"
          variant="danger"
          size="sm"
          onClick={() => this.props.deleteQuestion(question.id)}
          // onClick={() => this.redirectToHomepage()}
        >
          delete question
        </Button>
        <br />
        <br />
        {/* </Card> */}
      </div>
    );
  }
}

export default SingleQuestion;
