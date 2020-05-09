import React from "react";
import { connect } from "react-redux";
import { FormComponent } from "../../components/FormComponent";
import { ThemeProvider } from '@material-ui/styles';
import { theme } from "../../theme";
import { HeaderComponent } from "../../components/HeaderComponent";
import { saveVideo } from "../../actions/videos";
import { push } from "connected-react-router";
import { routes } from "../Router/";

export class NewVideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      title: "",
      description: "",
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

  onClickSaveVideo = () => {
    const { url, title, description } = this.state
    
    //verifica se o usuário não inseriu apenas um espaço, ao invés de digitar um texto
    const urlIsValid = url && url.trim();
    const titleIsValid = title && title.trim();
    const descriptionIsValid = description && description.trim();

    if(urlIsValid && titleIsValid && descriptionIsValid !== ''){
      const videoData = {
        title,
        description,
        video: url
      }
      this.props.postVideo(videoData)
      this.setState({
        url: "",
        title: "",
        description: "",
      })
    } else {
      window.alert("Insira dados válidos.")
      this.setState({
        url: "",
        title: "",
        description: "",
      })
    }
  }

  render() {
    const formInputsData = [
      {
        name: "url",
        label: "Link",
        value: this.state.url,
        handleChange: this.handleInputChange
      },
      {
        name: "title",
        label: "Título",
        value: this.state.title,
        handleChange: this.handleInputChange,
      },
      {
        name: "description",
        label: "Descrição",
        value: this.state.description,
        handleChange: this.handleInputChange,
        multiline: true,
        rowsMax: 5,
      },
    ]
    return (
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <FormComponent
          formInputs={formInputsData}
          buttonText={"Salvar"}
          onButtonClick={this.onClickSaveVideo}
        />
      </ThemeProvider>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  goToLoginPage: () => dispatch(push(routes.loginPage)),
  postVideo: (data) => dispatch(saveVideo(data))
});

export default connect(null, mapDispatchToProps)(NewVideoPage);