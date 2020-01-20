import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import EachTrip from '../../components/EachTrip';
import { connect } from 'react-redux';
import { getAllTrips } from '../../actions/trips';
import { push } from "connected-react-router";
import { routes } from "../Router";

const MainContainer = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const LinkContainer = styled.div`
  text-align: right;
  color: #E65804;
  margin: 10px;
  font-weight: bold;
  cursor: pointer;
`;

const PageTitle = styled.h2`
  text-align: center;
  color: #E65804;
`;

class TripListPage extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token')
    if (token === null) {
      this.props.goToHomePage()
    } else {
      this.props.showAllTrips()
    }
  }

  render(){
    return(
      <MainContainer>
        <Header />
        <LinkContainer onClick={this.props.goToNewTripForm}>Criar novas viagens</LinkContainer>
        <PageTitle>Lista de viagens</PageTitle>
        <div>
          {this.props.allTrips.map( trip => {
            return <EachTrip trip={trip} />
          })
          }
        </div>
      </MainContainer>
    )
}
}

function mapStateToProps(state) {
  return {
    allTrips: state.trips.tripsArray,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showAllTrips: () => dispatch(getAllTrips()),
    goToNewTripForm: () => dispatch(push(routes.tripCreate)),
    goToHomePage: () => dispatch(push(routes.root))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TripListPage);