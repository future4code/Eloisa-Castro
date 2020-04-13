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

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
`;

export const VideoPage = props => {
  return (
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
        <video src="http://soter.ninja/videos/1.mp4" />
        <Typography gutterBottom variant="body2" color="primary">
          Título
        </Typography>
        <Typography display="block" variant="caption" color="textSecondary">
          Descrição
        </Typography>
      </Box>
    </ThemeProvider>
  );
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
)(VideoPage);