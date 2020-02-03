import React from "react";
import { connect } from "react-redux";
import DayPlanner from "../DayPlanner";
import styled from 'styled-components';

const WeekPlannerContainer = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 5px;
  margin: 20px 5px;
`;

export class WeekPlanner extends React.Component {
  render() {
    const weekDays = [
      { value: 1, day: 'Domingo' },
      { value: 2, day: 'Segunda-feira' },
      { value: 3, day: 'Terça-feira' },
      { value: 4, day: 'Quarta-feira' },
      { value: 5, day: 'Quinta-feira' },
      { value: 6, day: 'Sexta-feira' },
      { value: 7, day: 'Sábado' },
    ]
    return (
      <WeekPlannerContainer>
        {weekDays.map( day => (
          <DayPlanner key={day.value} text={day.day} />
        ))}
      </WeekPlannerContainer>
    )
  }
}

export default connect()(WeekPlanner);