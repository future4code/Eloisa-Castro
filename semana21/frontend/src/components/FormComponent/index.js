import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from "styled-components";

const FormContainer = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StyledTextField = styled(TextField)`
  width: 380px;
  margin-bottom: 40px !important;
`;

export function FormComponent(props) {
  return (
    <FormContainer noValidate>
      {props.formInputs.map( input => (
        <StyledTextField 
          required
          name={input.name}
          label={input.label}
          InputLabelProps={{ shrink: true }}
          value={input.value}
          onChange={input.handleChange}
          type={ input.type ? input.type : "text"}
      />
      ))}
      <Button variant="contained" color="primary">
        {props.buttonText}
      </Button>
    </FormContainer>
  )
}