import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from '@material-ui/styles';
import { theme } from "../../theme";
import styled from 'styled-components';
import { FeedPageComponent } from "../../components/FeedPageComponent";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import { fetchVideos } from "../../actions/videos";
import { HeaderComponent } from "../../components/HeaderComponent";

const FeedWrapper = styled.div`
  padding: 30px;
`;

export class FeedPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token")
    if (token === null) {
      this.props.goToLoginPage()
    } else {
      this.props.getVideos()
    }
  }

  render() {
    const inputData = this.props.videos.map( video => ({
        id: video.id,
        src: video.video,
        title: video.title
      }))
    
    return (
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <FeedWrapper>
          <FeedPageComponent feedInputs={inputData} />
        </FeedWrapper>
      </ThemeProvider>
    );
  }
};

const mapStateToProps = state => ({
  videos: state.videos.allVideos
});

const mapDispatchToProps = dispatch => ({
  goToLoginPage: () => dispatch(push(routes.loginPage)),
  getVideos: () => dispatch(fetchVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);