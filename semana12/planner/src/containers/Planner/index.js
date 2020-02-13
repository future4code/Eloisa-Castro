import React from "react";
import { connect } from "react-redux";
import PlannerForm from "../PlannerForm";
import WeekPlanner from "../WeekPlanner";
import styled from 'styled-components';

const PlannerContainer = styled.div`
  width: 100vw;
`;

export class Planner extends React.Component {
  render() {
    return (
      <PlannerContainer>
        <PlannerForm />
        <WeekPlanner />
      </PlannerContainer>
    )
  }
}

export default connect()(Planner);
