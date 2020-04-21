import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { connect } from "react-redux";
import { fetchVideoDetails } from "../../actions/video";

const StyledVideo = styled.video`
  height: 150px;
`;

export function FeedPageComponent(props) {
  const onVideoClick = (videoId) => {
    props.fetchVideoDetails(videoId)
  }
  return (
    <Grid container spacing={2}>
      {props.feedInputs.map(input => (
        <Grid key={input.id} item xs onClick={() => {onVideoClick(input.id)}}>
          <StyledVideo src={input.src} />
          <Typography gutterBottom variant="subtitle1" color="primary">
            {input.title}
          </Typography>
        </Grid>
      ))}
    </Grid>
  )
}

const mapDispatchToProps = dispatch => ({
  getVideoDetails: (videoId) => dispatch(fetchVideoDetails(videoId))
});

export default connect(null, mapDispatchToProps)(FeedPageComponent);