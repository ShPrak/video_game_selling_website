import React from 'react'
import styled from "styled-components"
const Text = styled.div`
padding: 0px 5px 5px 10px;
font-family: Verdana, sans-serif;
font-weigh: bold;
`;
const WrittenContent = (props) => {
    return (
        <Text  dangerouslySetInnerHTML={{__html: props.string}}>
        </Text>
  )
}

export default WrittenContent