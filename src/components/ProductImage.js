import React from 'react'
import styled from 'styled-components'
const ImgContainer = styled.div`
    flex: 1;
    padding:0,900px;
`;
const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-ft: cover; 
`;
const ProductImage = (props) => {
  return (
    <ImgContainer> 
        <Image src = {props.name}>
        </Image>
    </ImgContainer>
    
  )
}

export default ProductImage