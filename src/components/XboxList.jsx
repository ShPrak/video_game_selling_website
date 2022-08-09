import { useState } from "react";
import styled from "styled-components";
import XboxAll from "../components/XboxAll.jsx";
import { changeFilter,changeSorter,changeConsole } from '../redux/filterRedux';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
const Container = styled.div`
background-color:black;
`;

const Title = styled.h1`
  margin: 20px;
  color:white;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  color:white;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const XboxList = () => {
  const ordering = useSelector(state=>state.filters);
  const dispatch = useDispatch();
  const handleFilters = (tag) =>{
    const condition = tag.target.value; 
    dispatch(changeFilter({filter:condition}));
  };
  const handleSorting = (tag) =>{
    const sort = tag.target.value; 
    dispatch(changeSorter({sort:sort}));
  };
  return (
    <Container>
      <Title>Games</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Games:</FilterText>
          <Select value={ordering.filter} onChange = {handleFilters}>
            <Option value = "E">All</Option>
            <Option value = "NEW">New</Option>
            <Option value = "PREOWNED">Pre-owned</Option>
          </Select>
        </Filter>
        <Filter> 
          <FilterText>Sort Products:</FilterText>
          <Select value={ordering.sorter} onChange = {handleSorting}>
            <Option value = "default" selected>Default</Option>
            <Option value = "low" selected>Price(low to high)</Option>
            <Option value = "high">Price(high to low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <XboxAll/>
    </Container>
  );
};

export default XboxList;