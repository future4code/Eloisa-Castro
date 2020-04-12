import React from "react";
import { connect } from "react-redux";
import { FormComponent } from "../../components/FormComponent";

export class ChangePasswordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualPassword: "",
      newPassword: "",
      newPasswordConfirm: "",
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ ...this.state, [name]: value })
  };

  render() {
    const formInputsData = [
      {
        name: "actualPassword",
        label: "Senha atual",
        value: this.state.actualPassword,
        handleChange: this.handleInputChange,
        type: "password"
      },
      {
        name: "newPassword",
        label: "Nova senha",
        value: this.state.newPassword,
        handleChange: this.handleInputChange,
        type: "password"
      },
      {
        name: "newPasswordConfirm",
        label: "Confirme sua nova senha",
        value: this.state.newPasswordConfirm,
        handleChange: this.handleInputChange,
        type: "password"
      }
    ]
    return (
      <div>
        <FormComponent formInputs={formInputsData} buttonText={"Salvar"} />
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
)(ChangePasswordPage);
