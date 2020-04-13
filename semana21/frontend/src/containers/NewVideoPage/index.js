import React from "react";
import { connect } from "react-redux";
import { FormComponent } from "../../components/FormComponent";

export class NewVideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      title: "",
      description: "",
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ ...this.state, [name]: value })
  };

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
)(NewVideoPage);