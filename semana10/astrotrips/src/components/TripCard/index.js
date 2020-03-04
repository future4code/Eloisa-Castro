import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { push } from 'connected-react-router';
import { routes } from '../../containers/Router';
import { getSelectedTripDetails } from '../../actions/trips'

const TripCardContainer = styled.div`
  border: 1px dashed #727272;
  padding: 10px;
  margin: 5px;
  height: 280px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleContainer = styled.h2`
  margin: 0;
  color: #E65804;
`;

const DescriptionContainer = styled.h5`
  margin: 8px 0;
  color: #F28123;
`;

const DetailsContainer = styled.div`
  font-size: 14px;
  color: #727272;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;


const TripCard = (props) => {
  // const onApplicate = () => {
  //     props.saveTripDetails(props.trip.id, props.trip.name)
  //     props.goToFormPage()
  // }

  return (
    
    <TripCardContainer>
      <div>
        <TitleContainer>{props.trip.name}</TitleContainer>
        <DescriptionContainer><i>{props.trip.description}</i></DescriptionContainer>
      </div>
      <div>
        <DetailsContainer>
          <p><strong>Planeta:</strong> {props.trip.planet}</p>
          <p><strong>Data:</strong> {props.trip.date}</p>
          <p><strong>Duração:</strong> {props.trip.durationInDays}</p>
        </DetailsContainer>
        <StyledButton variant="contained" color="primary" onClick={props.goToFormPage}>
          INSCREVER!
        </StyledButton>
      </div>
    </TripCardContainer>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    goToFormPage: () => dispatch(push(routes.applicationForm)),
    // saveTripDetails: (tripId, tripName) => dispatch(getSelectedTripDetails(tripId, tripName))
  }  
}

export default connect(null, mapDispatchToProps)(TripCard);