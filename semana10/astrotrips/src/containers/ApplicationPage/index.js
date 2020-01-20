import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import TripCard from '../../components/TripCard';
import { getAllTrips } from '../../actions/trips'

const MainContainer = styled.div`

`;

const TripCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

class ApplicationPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.showAllTrips()
  }

  render() {
    const eachTrip = this.props.allTrips.map( trip => {
      return <TripCard key={trip.id} trip={trip}/>
    })

    return (
      
      <MainContainer>
        <Header/>
        <TripCardsContainer>
          {eachTrip}
        </TripCardsContainer>
      </MainContainer>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return{
    showAllTrips: () => dispatch(getAllTrips())
  }
}

function mapStateToProps(state) {
  return {
    allTrips: state.trips.tripsArray,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationPage);