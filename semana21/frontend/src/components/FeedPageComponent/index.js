import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const StyledVideo = styled.video`
  height: 150px;
`;

export function FeedPageComponent(props) {
  return (
    <Grid container spacing={2}>
      {props.feedInputs.map(input => (
        <Grid item xs>
          <StyledVideo src={input.src} />
          <Typography gutterBottom variant="subtitle1" color="primary">
            {input.title}
          </Typography>
        </Grid>
      ))}
    </Grid>
  )
}