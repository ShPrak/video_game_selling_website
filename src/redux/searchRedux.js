import {createSlice} from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search" ,
  initialState:{
      text: "",
  },
  reducers:{
      changeSearch : (state, action) => {
        state.text = action.payload.val;
    },
  },
});
export const {changeSearch}  =searchSlice.actions;
export default searchSlice.reducer;