import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {changeConsole } from '../redux/filterRedux';
import { useDispatch } from 'react-redux';
import Searcbar from "./Searcbar";

const Container = styled.div`
  height: 60px;
  background-color:black;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color:#45f542;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color:white;
  border-radius:50px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  &{
    font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  display: inline-block;
 

  
  }
  &{
    color:white;
  text-decoration: none;
  display: inline-block;
  position: relative;
  }
  &::after {
    content: "";
    display: block;
    margin: auto;
    height: 3px;
    width: 0;
    top: 5px;
    background: transparent;
    transition: all 0.3s;
    
  }
  &:hover::after {
    width: 100%;
    background:#45f542 ;
  }
  

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Description = styled.div`
  display:flex;

`;
const Navbar = () => {
  const cartnum = useSelector(state=>state.cart.quantity);
  const dispatch = useDispatch();
  const handleConsole = (tag) =>{ 
    dispatch(changeConsole({console:"E"}));
  };
  const handleConsole1 = (tag) =>{ 
    dispatch(changeConsole({console:"5"}));
  };
  const handleConsole2 = (tag) =>{
    dispatch(changeConsole({console:"X"}));
  };
  const handleConsole3 = (tag) =>{
    dispatch(changeConsole({console:"4"}));
  };
  const handleConsole4 = (tag) =>{
    dispatch(changeConsole({console:"1"}));
  };
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>TradeIT.</Logo>
        </Left>
        <Link to = "/">
          <MenuItem onClick = {handleConsole}>All</MenuItem>
        </Link>
        <Link to = "/">
          <MenuItem onClick = {handleConsole1}>PS5</MenuItem>
        </Link>
        <Link to = "/">
          <MenuItem onClick = {handleConsole2}>XBOX SERIES X</MenuItem>
        </Link>
        <Link to = "/">
          <MenuItem onClick = {handleConsole3}>PS4</MenuItem>
        </Link>
        <Link to = "/">
          <MenuItem onClick = {handleConsole4}>XBOX ONE</MenuItem>
        </Link>
        <Right>
          <Description>
          <Searcbar />
          <Link to = "/login">
            <MenuItem>Login</MenuItem>
          </Link>
          <Link to  = "/cart">
            <MenuItem>
               <Badge badgeContent={cartnum} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
            </MenuItem>
          </Link>
          </Description>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
