import { Add, CheckOutlined, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateQuantity,removeItem,checkOutCart } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";


const Container = styled.div`
background-color:black;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: white;
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
  background-color:black;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  color:white;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  color:white;
  `;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color:white;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color:white;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: white;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid white;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  color:white;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  color:white;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  color:white;
`;
const ButtonContainer = styled.div`
margin:0px 5px;
padding: 5px 5px;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: white;
  color: black;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector(state=>state.cart);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const shipping = () =>{
    if(cart.total > 0)
    {
      return 50;
    }
    else
    {
      return 0;
    } 
  };
  const shipping_discount = () =>{
    if(cart.total >= 6000)
    {
      return -50;
    }
    else
    {
      return 0;
    } 
  };
  const checkout = ()=>{
    setOpen(false);
    dispatch(checkOutCart());
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  var iter = 0;
  const changeQuantity = (mode, id) => {
    const index = cart.products.findIndex(product=> product.id == id);
    const product = cart.products[index];
    
    if (mode === "remove") {
      
      if(cart.product_qty[index]> 1)
      {
        dispatch(updateQuantity({product,index:index, val:-1}));
      }
      else{
        dispatch(removeItem({product,index:index}));
      }
      
    }else if(mode === "add"){
      
      dispatch(updateQuantity({product,index:index, val:+1}));
    }
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper style={{color:"white"}}>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to = "/">
            <TopButton >CONTINUE SHOPPING</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Hr />
          <Info>
            {cart.products.map(product=>(
              <div>
              <Product>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product.id}
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add onClick = {()=> changeQuantity("add", product.id)}/>
                  <ProductAmount>{cart.product_qty[iter++]}</ProductAmount>
                  <Remove onClick = {()=> changeQuantity("remove", product.id)} />
                </ProductAmountContainer>
                <ProductPrice>{product.price}</ProductPrice>
              </PriceDetail>
            </Product> 
             <Hr />
             </div>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ {shipping()}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ {shipping_discount()}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ {cart.total + shipping() + shipping_discount()}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick = {()=>handleOpen()}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
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
              Click Pay to deduct the total amount from your account.
              Click Cancel to continue shopping.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <ButtonContainer >
            <Button onClick={handleClose}>Cancel</Button>
            </ButtonContainer >
            <ButtonContainer >
            
            <Link to = "/">
            <Button onClick={checkout} autoFocus>
              Pay
            </Button>
            </Link>
            </ButtonContainer >

          </DialogActions>
          </Dialog>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;