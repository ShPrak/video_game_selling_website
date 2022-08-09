import React from 'react'
import { Search} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import Resultsmap from './Resultsmap';
import { changeSearch } from '../redux/searchRedux';
import { useDispatch, useSelector } from "react-redux";
const SearchContainer = styled.div`
  width: 250px;
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color:white;

`;
const ResultsContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius:50px;
`;
const Input = styled.input`
width:250px;
  border: none;
  ${mobile({ width: "50px" })}
`;
function Searcbar() {
    const searches = useSelector(state=>state.search);
    const dispatch = useDispatch();
    const getresults = (tag)=>
    {
        const text = tag.target.value;
        dispatch(changeSearch({val:text}));
    }
  return (
      <div>
    <SearchContainer>
            <Input onChange = {getresults} placeholder="Search" value={searches.text}/>
            <Search style={{ color: "black", fontSize: 16 }} />
    </SearchContainer>
    {searches.text.length != 0 &&(
    <Resultsmap data = {searches.text}/>)}
    </div>
  )
}

export default Searcbar