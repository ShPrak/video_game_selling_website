import React from 'react'
import styled from 'styled-components'
const Title = styled.h1`
    padding: 10px;
    font-weigh: bold;
    font-family: Verdana, sans-serif;
`    
const Titles = (props) => {
  return (
    <Title>{props.string}</Title>
  )
}

export default Titles