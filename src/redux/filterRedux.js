import {createSlice} from "@reduxjs/toolkit";
const organizationSlice = createSlice({
  name: "organization" ,
  initialState:{
      filter: "E",
      sorter: "default",
      console: "E"
  },
  reducers:{
      changeFilter : (state, action) => {
        state.filter = action.payload.filter;
    },
      changeSorter : (state, action) => {
        state.sorter = action.payload.sort;
    },
    changeConsole: (state, action) => {
      state.console = action.payload.console;
  },
  },
});
export const {changeFilter, changeSorter, changeConsole}  =organizationSlice.actions;
export default organizationSlice.reducer;