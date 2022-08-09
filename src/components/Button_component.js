import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
margin:0px 5px;
padding: 5px 5px;
`;
const Button_component = (props) => {
  return (
    <ButtonContainer>
      <Button variant = {props.type} style = {{backgroundColor:props.color, whiteSpace: "nowrap", minWidth: "auto", borderColor: "white", color: "white"}}>{props.name} </Button>
    </ButtonContainer>
  )
}

export default Button_component