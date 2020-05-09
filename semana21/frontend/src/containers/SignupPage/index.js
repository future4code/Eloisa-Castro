import React from "react";
import { connect } from "react-redux";
import { FormComponent } from "../../components/FormComponent";
import { LogoComponent } from "../../components/Logo";
import { ThemeProvider } from '@material-ui/styles';
import { theme } from "../../theme";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import { userSignup } from "../../actions/user";

export class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      birthDate: "",
      photo: "",
      password: "",
      passwordConfirm: "",
    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token")
    if (token !== null) {
      this.props.goToHomePage()
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ ...this.state, [name]: value })
  };

  onClickSignup = () => {
    const { name, email, birthDate, photo, password, passwordConfirm } = this.state
    
    //verifica se o usuário não inseriu apenas um espaço, ao invés de digitar um texto
    const nameIsValid = name && name.trim();
    const emailIsValid = email && email.trim();
    const birthDateIsValid = birthDate && birthDate.trim();
    const photoIsValid = photo && photo.trim();
    const passwordIsValid = password && password.trim();
    
    if(nameIsValid && emailIsValid && birthDateIsValid && passwordIsValid && photoIsValid !== ''){
      if (password === passwordConfirm) {
        const signupData = {
          name,
          email,
          birthDate,
          photo,
          password
        }

        this.props.onSignup(signupData)
        
        this.setState({
          name: '',
          email: '',
          birthDate: '',
          photo: '',
          password: '',
          confirmPassword: '',
        })
      } else {
        window.alert("As senhas digitadas são diferentes.")
      }
    } else {
      window.alert("Insira dados válidos.")
    }
  }


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
        name: "photo",
        label: "Foto",
        value: this.state.photo,
        handleChange: this.handleInputChange
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
    ]
    return (
      <ThemeProvider theme={theme}>
        <LogoComponent />
        <FormComponent formInputs={formInputsData} buttonText={"Signup"} onButtonClick={this.onClickSignup}/>
      </ThemeProvider>
    );
  }
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => ({
  goToHomePage: () => dispatch(push(routes.homePage)),
  onSignup: (signupData) => dispatch(userSignup(signupData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);