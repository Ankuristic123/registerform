import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class FAQ extends Form {
  state = {
    data: { question: "", answer: "" },
    errors: {}
  };

  schema = {
    question: Joi.string()
      .required()
      .label("question"),
    answer: Joi.string()
      .required()
      .label("Answer")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>FAQ</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("question", "Question")}
          {this.renderInput("answer", "Answer")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default FAQ;
