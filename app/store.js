import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/cart-slice";


export const store = configureStore({
    reducer: {
        basket: basketReducer,
        
    }
})