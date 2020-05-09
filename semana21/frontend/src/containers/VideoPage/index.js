import React from "react";
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from "../../theme";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import styled from 'styled-components';
import { push } from "connected-react-router";
import { routes } from "../Router/";

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
`;

export const VideoPage = props => {
  let pageToRender
  if (!window.localStorage.getItem('token') || props.videoDetails === undefined) {
    props.goToHomePage()
  } else {
    pageToRender = (
      <ThemeProvider theme={theme}>
        <Box>
          <ButtonWrapper>
            <IconButton size="small" aria-label="Editar">
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" aria-label="Deletar">
              <DeleteForeverIcon fontSize="small"/>
            </IconButton>
          </ButtonWrapper>
          <video src={props.videoDetails.video} controls />
          <Typography gutterBottom variant="body2" color="primary">
            {props.videoDetails.title}
          </Typography>
          <Typography display="block" variant="caption" color="textSecondary">
            {props.videoDetails.description}
          </Typography>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <div>
      {pageToRender}
    </div>
  )
};

const mapStateToProps = state => ({
  videoDetails: state.video.videoDetails
});

const mapDispatchToProps = dispatch => ({
  goToHomePage: () => dispatch(push(routes.homePage)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPage);