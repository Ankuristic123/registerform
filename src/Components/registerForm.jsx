import React from "react";
import Joi, { join } from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { firstname: "", lastname:"",email:"",password: "",repeatpassword:"" ,contactno: "" },
    errors: {}
  };

  schema = {
    
    firstname: Joi.string()
      .required()
      .label(" First Name"),
      lastname:Joi.string()
      .required()
      .label("Last Name"),
      email: Joi.string()
      .required()
      .label("Email"),
      password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
      repeatpassword: Joi.string()
      .required()
      .min(5)
      .label("Repeat Password"),
      contactno: Joi.string()
      .required()
      .label(" Contact No")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstname", "First Name")}
          {this.renderInput("lastname", "Last Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("repeatpassword", "RepeatPassword", "repeatpassword")}
          {this.renderInput("contactno", "ContactNo")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
