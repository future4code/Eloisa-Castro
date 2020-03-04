import React from 'react';
import styled from 'styled-components';
import { push } from 'connected-react-router';
import { routes } from '../../containers/Router';
import { connect } from 'react-redux';
import { getTripDetails } from '../../actions/trips';

const EachTripContainer = styled.div`
  text-align: center;
  cursor: pointer;
`;

function EachTrip(props) {
  const onTripClick = () => {
    props.getDetails(props.trip.id)
    props.goToTripDetailsPage()
  }

  return (
    <EachTripContainer>
      <p onClick={onTripClick}>{props.trip.name}</p>
    </EachTripContainer>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    goToTripDetailsPage: () => dispatch(push(routes.tripDetails)),
    getDetails: (tripId) => dispatch(getTripDetails(tripId))
  }
}

export default connect(null, mapDispatchToProps)(EachTrip);