import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { getAllTasks } from "../../actions/tasks";

const DayPlannerContainer = styled.div`
  border: 1px dashed gray;
  padding: 5px;
`;

export const DayText = styled.h4`
  margin: 10px 0;
  text-align: center;
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  width: 100%;
`;

export class DayPlanner extends React.Component {

  componentDidMount = () => {
    this.props.getTasks()
  }

  render() {
    let filterTasks
    switch (this.props.text) {
      case 'Domingo':
        filterTasks = this.props.tasksList.filter( task => {
          return task.day === '1'
        })
        break;

      case 'Segunda-feira':
        filterTasks = this.props.tasksList.filter( task => {
          return task.day === '2'
        })
        break;

      case 'Terça-feira':
        filterTasks = this.props.tasksList.filter( task => {
          return task.day === '3'
        })
        break;

      case 'Quarta-feira':
        filterTasks = this.props.tasksList.filter( task => {
          return task.day === '4'
        })
        break;

      case 'Quinta-feira':
        filterTasks = this.props.tasksList.filter( task => {
          return task.day === '5'
        })
        break;

      case 'Sexta-feira':
        filterTasks = this.props.tasksList.filter( task => {
          return task.day === '6'
        })
        break;

      case 'Sábado':
        filterTasks = this.props.tasksList.filter( task => {
          return task.day === '7'
        })
        break;
    
      default:
        break;
    }

    return (
      <DayPlannerContainer>
        <DayText>{this.props.text}</DayText>
        { filterTasks !== undefined && filterTasks.map( task => (
          <StyledFormControlLabel
            control={ <Checkbox/> }
            label={task.text}
          />
        ))}
      </DayPlannerContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasksList: state.tasks.allTasks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTasks: () => dispatch(getAllTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayPlanner);