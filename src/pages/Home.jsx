import React from "react";
import Announcement from "../components/Announcement";
import styled from 'styled-components'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import XboxList from "../components/XboxList";

const Container = styled.div`
background-color: black;
color:white;
font-family: lato;
`;
const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <XboxList />
      <Footer/>
    </Container>
  );
};

export default Home;
