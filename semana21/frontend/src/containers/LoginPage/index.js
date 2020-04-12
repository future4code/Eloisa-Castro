import React from "react";
import { connect } from "react-redux";
import { FormComponent } from "../../components/FormComponent";

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ ...this.state, [name]: value })
  };

  render () {
    const formInputsData = [
      {
        name: "email",
        label: "E-mail",
        value: this.state.email,
        handleChange: this.handleInputChange,
        type: "email"
      },
      {
        name: "password",
        label: "Senha",
        value: this.state.password,
        handleChange: this.handleInputChange,
        type: "password"
      },
    ]
    return (
      <div>
        <FormComponent formInputs={formInputsData} buttonText={"Login"} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);