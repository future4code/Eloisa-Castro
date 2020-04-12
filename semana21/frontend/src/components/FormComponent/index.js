import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/styles';
import { theme } from "../../theme";
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';

const FormContainer = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StyledTextField = styled(TextField)`
  width: 380px;
`;

export function FormComponent(props) {
  return (
    <ThemeProvider theme={theme}>
      <FormContainer noValidate>
        {props.formInputs.map( input => (
          <Box m={2}>
            <StyledTextField 
              required
              name={input.name}
              label={input.label}
              InputLabelProps={{ shrink: true }}
              value={input.value}
              onChange={input.handleChange}
              type={ input.type ? input.type : "text"}
            />
          </Box>
        ))}
        <Button variant="contained" color="primary">
          {props.buttonText}
        </Button>
      </FormContainer>
    </ThemeProvider>
  )
}