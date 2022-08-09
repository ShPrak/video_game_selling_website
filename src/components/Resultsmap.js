import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { xboxgames } from "../data.js";
import { changeSearch } from '../redux/searchRedux';
import { useDispatch, useSelector } from "react-redux";
const ResultsContainer = styled.div`
  width:250px;
  height:35px;
  border: 0px solid lightgray;
  background-color: white;
  align-items: center;
  margin-left: 25px;
  overflow-x: hidden;
  overflow: hidden;
  overflow-y:auto;
  font-size:15px;
`;
const linkStyle ={
    textDecoration: "none",
    color: 'black',
    display: 'flex',
    textOverflow: 'ellipsis',
    overflow:"hidden",
    whiteSpace: 'nowrap',
    overflowX:'auto'
  };
function Resultsmap(props) {
  var results = xboxgames.filter(item=> item.title.toLowerCase().includes(props.data.toLowerCase()));
  results = results.slice(0,3);
  const dispatch = useDispatch();
  const handleChange = () =>
  {
    dispatch(changeSearch({val:""}));;
  };
return (
    <ResultsContainer>
        {results.map((item)=>(<Link to = {"/product/" + item.id} style = {linkStyle} onClick = {handleChange}>{item.title}</Link>)
            )}    
    </ResultsContainer>
    
  )
}

export default Resultsmap