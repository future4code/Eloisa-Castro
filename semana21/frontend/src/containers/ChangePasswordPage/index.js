import React from "react";
import { connect } from "react-redux";
import { FormComponent } from "../../components/FormComponent";
import { changePassword } from "../../actions/user";
import { HeaderComponent } from "../../components/HeaderComponent";
import { ThemeProvider } from '@material-ui/styles';
import { theme } from "../../theme";
import { push } from "connected-react-router";
import { routes } from "../Router/";

export class ChangePasswordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualPassword: "",
      newPassword: "",
      newPasswordConfirm: "",
    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token")
    if (token === null) {
      this.props.goToLoginPage()
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ ...this.state, [name]: value })
  };

  onClickChangePassword = () => {
    const { actualPassword, newPassword, newPasswordConfirm } = this.state
    if (newPassword === newPasswordConfirm) {
      const reqData = {
        oldPassword: actualPassword,
        newPassword
      }

      this.props.changePassword(reqData)

      this.setState({
        actualPassword: "",
        newPassword: "",
        newPasswordConfirm: "",
      })
    } else {
      window.alert("As senhas digitadas são diferentes.")
      this.setState({
        newPassword: "",
        newPasswordConfirm: "",
      })
    }
  }

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
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <FormComponent formInputs={formInputsData} buttonText={"Salvar"} onButtonClick={this.onClickChangePassword}/>
      </ThemeProvider>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  goToLoginPage: () => dispatch(push(routes.loginPage)),
  changePassword: (data) => dispatch(changePassword(data))
});

export default connect(null, mapDispatchToProps)(ChangePasswordPage);