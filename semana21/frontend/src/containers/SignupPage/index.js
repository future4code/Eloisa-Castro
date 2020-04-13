import React from "react";
import { connect } from "react-redux";
import { FormComponent } from "../../components/FormComponent";

export class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      birthDate: "",
      password: "",
      passwordConfirm: "",
      photo: "",
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ ...this.state, [name]: value })
  };

  render() {
    const formInputsData = [
      {
        name: "name",
        label: "Nome",
        value: this.state.name,
        handleChange: this.handleInputChange
      },
      {
        name: "email",
        label: "E-mail",
        value: this.state.email,
        handleChange: this.handleInputChange,
        type: "email"
      },
      {
        name: "birthDate",
        label: "Data de nascimento",
        value: this.state.birthDate,
        handleChange: this.handleInputChange,
        type: "date"
      },
      {
        name: "password",
        label: "Senha",
        value: this.state.password,
        handleChange: this.handleInputChange,
        type: "password"
      },
      {
        name: "passwordConfirm",
        label: "Confirme sua senha",
        value: this.state.passwordConfirm,
        handleChange: this.handleInputChange,
        type: "password"
      },
      {
        name: "photo",
        label: "Foto",
        value: this.state.photo,
        handleChange: this.handleInputChange
      },
    ]
    return (
      <div>
        <FormComponent formInputs={formInputsData} buttonText={"Signup"} />
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
)(SignupPage);