import React from "react";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { postTask } from "../../actions/tasks";

const PlannerFormContainer = styled.div`
  width: 700px;
  padding: 10px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  margin: 0;
  text-align: center;
  color: red;
`;

export const TaskForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 700px;
  padding: 10px;
  margin: 0 auto;
`;

const FormDivider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTextField = styled(TextField)`
  width: 70%;
`;

export const SubmitButton = styled(Button)`
`;

export class PlannerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: '',
      daySelect: '',
    }
  }

  handleInputChange = (e) => {
    const newValue = e.target.value
    this.setState({ taskText : newValue})
  }

  handleSelectChange = (e) => {
    const newValue = e.target.value
    this.setState({ daySelect: newValue })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    if (this.state.daySelect !== '') {
      const taskToSave = {
        text: this.state.taskText,
        day: this.state.daySelect
      }
      this.props.saveTask(taskToSave)
      this.setState({
        taskText: '',
        daySelect: '',
      })
    }
  }

  render() {
    const weekDays = [
      { value: '1', label: 'Domingo' },
      { value: '2', label: 'Segunda-feira' },
      { value: '3', label: 'Terça-feira' },
      { value: '4', label: 'Quarta-feira' },
      { value: '5', label: 'Quinta-feira' },
      { value: '6', label: 'Sexta-feira' },
      { value: '7', label: 'Sábado' },
    ]

    return (
      <TaskForm onSubmit={this.onFormSubmit}>
        <FormTitle>Nova Tarefa</FormTitle>
          <TextField
            id="outlined-name"
            label="Tarefa"
            value={this.state.taskText}
            onChange={this.handleInputChange}
            margin="normal"
            variant="outlined"
            required
          />

          <FormDivider>
            <StyledTextField
              id="outlined-select-currency"
              select
              label="Dia da semana"
              value={this.state.daySelect}
              onChange={this.handleSelectChange}
              margin="normal"
              variant="outlined"
              required
            >
              {weekDays.map(day => (
                <MenuItem key={day.value} value={day.value}>
                  {day.label}
                </MenuItem>
              ))}
            </StyledTextField>
            <SubmitButton variant="contained" color="primary" type="submit">
              Cadastrar
            </SubmitButton>
          </FormDivider>
          
        </TaskForm>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveTask: (taskData) => dispatch(postTask(taskData)),
  }
}

export default connect(null, mapDispatchToProps)(PlannerForm);