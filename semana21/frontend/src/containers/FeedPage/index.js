import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from '@material-ui/styles';
import { theme } from "../../theme";
import styled from 'styled-components';
import { FeedPageComponent } from "../../components/FeedPageComponent";

const FeedWrapper = styled.div`
  padding: 30px;
`;

export class FeedPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const inputData = [
      {
        src: "http://soter.ninja/videos/1.mp4",
        title: "Título"
      },
      {
        src: "http://soter.ninja/videos/1.mp4",
        title: "Título"
      },
      {
        src: "http://soter.ninja/videos/1.mp4",
        title: "Título"
      },
      {
        src: "http://soter.ninja/videos/1.mp4",
        title: "Título"
      },
      {
        src: "http://soter.ninja/videos/1.mp4",
        title: "Título"
      },
    ]
    
    return (
      <ThemeProvider theme={theme}>
        <FeedWrapper>
          <FeedPageComponent feedInputs={inputData} />
        </FeedWrapper>
      </ThemeProvider>
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
)(FeedPage);