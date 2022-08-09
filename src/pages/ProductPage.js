import React from 'react'
import styled from 'styled-components'
import ProductImage from '../components/ProductImage';
import Button_component from '../components/Button_component';
import WrittenContent from '../components/WrittenContent';
import Titles from '../components/Titles';
import Video from '../components/Video';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Announcement from '../components/Announcement';
import { Link, useLocation } from 'react-router-dom';
import { xboxgames } from "../data.js";
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Container = styled.div`
background-color: black;
color:white;
font-family: lato;
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
    padding:0,900px;
`;
const InfoContainer = styled.div`
    padding:  0px 50px;
    flex: 2;
`;
const VideoContainer = styled.div`
    padding:  0px 20px;
`;

const Title = styled.h1`
    padding: 10px;
    font-weigh: bold;

`;
const Header = styled.h1`
font-family: Verdana, sans-serif;
font-weight:100;
font-weigh: bold;
padding: 10px;
`
const Description = styled.div`
    font-weight:200;

`;
const ButtonSet = styled.div`
display: flex;
margin: 10px;
`
const ButtonContainer = styled.div`
margin:0px 5px;
padding: 5px 5px;
`;
const ProductPage = () => {
   
    const id = useLocation().pathname.split("/")[2];
    const product = xboxgames.find(item => item.id == id);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const toCart = () =>
    {
       dispatch(addProduct({product, price: product.price}));
    };
    var linksto = [product.other_loc,product.id];
    var color = ["transparent", "red"];
    if(product.condition == "NEW")
    {
        color = ["red", "transparent"];
        linksto = [product.id, product.other_loc];
    }
    const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <ProductImage name = {product.img}/>
                    <ButtonSet>
                        <Link to = "/cart">
                            <ButtonContainer>
                                <Button onClick = {toCart} variant = "contained" style = {{backgroundColor:"blue", whiteSpace: "nowrap", minWidth: "auto", borderColor: "white", color: "white"}}>Buy </Button>
                            </ButtonContainer>
                        </Link>
                        <ButtonContainer>
                            <Button onClick = {handleOpen} variant = "contained" style = {{backgroundColor:"green", whiteSpace: "nowrap", minWidth: "auto", borderColor: "white", color: "white"}}>Sell</Button>
                        </ButtonContainer>
                    </ButtonSet>
                </ImgContainer>

                <InfoContainer>
                    <Titles string = {product.title}/>
                    <Titles string = {"₹" + product.price}/>
                    <Header>Condition</Header>
                    <ButtonSet>
                        <Link to = {"/product/"+linksto[0]}style={{ textDecoration: 'none' }}>
                            <Button_component name = "NEW" color = {color[0]} type = "outlined"/>
                        </Link>
                        <Link to = {"/product/"+linksto[1]}style={{ textDecoration: 'none' }}>
                            <Button_component name = "PREOWNED" color = {color[1]} type = "outlined"/>
                        </Link>
                    </ButtonSet>
                    <Description>
                        <Title>Description</Title>
                        <WrittenContent string = {product.description} />
                    </Description>
                    <VideoContainer>
                        <Video src = {product.promo} />
                    </VideoContainer>
                    <Title>Additional Details</Title>
                    <Description>
                        <WrittenContent string = {product.details} />
                    </Description>
                </InfoContainer>
                <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          >        
            <DialogTitle id="alert-dialog-title">
            {"Confirm to checkout"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Click Sell to add the amount to your account.
              Click Decline to not sell.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Decline</Button>
            <Button onClick={handleClose} autoFocus>
              Sell
            </Button>
          </DialogActions>
          </Dialog>
            </Wrapper>
            <Footer />
        </Container>
      )
}

export default ProductPage