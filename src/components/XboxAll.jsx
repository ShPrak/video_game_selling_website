import styled from "styled-components";
import { xboxgames } from "../data.js";
import Eachxboxgame from "./Eachxboxgame.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    flex:5;
    justify-content: space-between;
    background-color:black;
    color:black;
`;

const XboxAll = () => {
  const ordering = useSelector(state=>state.filters);
  const refresh = () =>
   {
    var videogames = xboxgames.filter(item => item.condition.includes(ordering.filter));
    if(ordering.console === "E")
    {
      videogames = videogames.filter(item => item.device.includes("S"));
    }
    else if(ordering.console === "4"){
      videogames = videogames.filter(item => item.device.includes("4"));
    }
    else if(ordering.console === "5"){
      videogames = videogames.filter(item => item.device.includes("5"));
    }
    else if(ordering.console === "X"){
      videogames = videogames.filter(item => item.device.includes("Series"));
    }
    else if(ordering.console === "1"){
      videogames = videogames.filter(item => item.device.includes("OneS"));
      
    }
    if(ordering.sorter === "high")
    {
      videogames.sort(function(a,b) {return b.price - a.price});
    }
    else if(ordering.sorter === "low")
    {
      videogames.sort(function(a,b) {return a.price - b.price});
    }
    else
    {
      videogames.sort(function(a,b) {return a.id - b.id});
    }
    
    return videogames;
   };
  return (
    <div>
    <Container>
          {refresh().map((item) => (
            <Link to = {"/product/"+item.id}>
          <Eachxboxgame item={item} key={item.id} />
          </Link>
        ))}
     
    </Container>
    </div>
  );
};

export default XboxAll;