import {createSlice} from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart" ,
  initialState:{
      products: [],
      product_qty: [],
      quantity: 0,
      total: 0,
  },
  reducers:{
      addProduct : (state, action) => {
          state.total += action.payload.price;
          // checking if the product is already in the cart
          var pos = -1;
          for(var i = 0; i < state.products.length; i++)
          {
              if(state.products[i].id == action.payload.product.id)
              {
                pos = i;
                break;
              }
          }
          if(pos == -1)
          {
            state.products.push(action.payload.product);
            state.product_qty.push(1);
            state.quantity += 1;
          }
          else
          {
            state.product_qty[pos] += 1;
          }
          
      },
      updateQuantity : (state, action) =>{
        state.product_qty[action.payload.index] += action.payload.val;
        state.total += state.products[action.payload.index].price*action.payload.val;
      },
      removeItem: (state, action) =>{
        state.total -= state.products[action.payload.index].price;
        state.products.splice(action.payload.index, 1);
        state.product_qty.splice(action.payload.index, 1);
        state.quantity -=1;  
      }, 
      checkOutCart: (state) =>{
        state.products.splice(0, state.products.length);
        state.product_qty.splice(0, state.product_qty.length);
        state.total = 0;
        state.quantity = 0;
      }, 
  },
});
export const {addProduct,updateQuantity,removeItem,checkOutCart}  =cartSlice.actions;
export default cartSlice.reducer;