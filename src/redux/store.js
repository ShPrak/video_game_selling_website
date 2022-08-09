import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import organizationReducer from "./filterRedux";
import searchReducer from "./searchRedux";
export default configureStore({
    reducer: {
        cart: cartReducer,
        filters: organizationReducer,
        search: searchReducer,
    },
});