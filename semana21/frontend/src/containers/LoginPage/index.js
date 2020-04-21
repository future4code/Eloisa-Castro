import React from "react";
import { connect } from "react-redux";
import { FormComponent } from "../../components/FormComponent";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Link from '@material-ui/core/Link';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from "../../theme";
import Box from "@material-ui/core/Box";
import { LogoComponent } from "../../components/Logo";
import { userLogin } from "../../actions/user"

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  componentDidMount() {
    // const token = window.localStorage.getItem("token")
    // if (token !== null) {
    //   this.props.goToFeedPage()
    // }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ ...this.state, [name]: value })
  };

  onClickLogin = () => {
    const { email, password } = this.state
    
    //verifica se o usuário não inseriu apenas um espaço, ao invés de digitar um texto
    const emailIsValid = email && email.trim();
    
    if(emailIsValid !== '') {
      this.props.login(email, password)
        
      this.setState({
        email: '',
        password: ''
      })

    } else {
      window.alert("Insira dados válidos.")
    }
  }

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
      <ThemeProvider theme={theme}>
        <LogoComponent />
        <FormComponent formInputs={formInputsData} buttonText={"Login"} onButtonClick={this.onClickLogin}/>
        <Box mt={3}>
          <Link onClick={this.props.goToSignupPage} color="primary" m={50}>
            Ainda não tem cadastro? Clique aqui.
          </Link>
        </Box>
      </ThemeProvider>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  goToFeedPage: () => dispatch(push(routes.videoFeed)),
  goToSignupPage: () => dispatch(push(routes.signupPage)),
  login: (email, password) => dispatch(userLogin(email, password))
});

export default connect(null, mapDispatchToProps)(LoginPage);