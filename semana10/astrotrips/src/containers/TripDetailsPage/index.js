import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import styled from 'styled-components';


const MainContainer = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const TripContainer = styled.div`
  padding: 30px;
`;

class TripDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrCandidates: null,
    }
  }

  componentDidMount() {
    if (this.props.tripDetail) {
      this.setState({arrCandidates: this.props.tripDetail.candidates})
    }
    
  }

  render() {
    return (
    <MainContainer>
      <Header />
      <TripContainer>
        {this.props.tripDetail && (
          <div>
            <h2> {this.props.tripDetail.name} </h2>
            <h4> {this.props.tripDetail.description} </h4>
            <p>Inscritos:</p>
          </div>
        )}
        {this.state.arrCandidates && this.state.arrCandidates.map(el =>(
          <p>{el.name}</p> 
        ))}
      </TripContainer>
    </MainContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    tripDetail: state.trips.tripDetails
  }
}

export default connect(mapStateToProps)(TripDetailsPage);