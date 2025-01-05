import { createSlice } from "@reduxjs/toolkit";


const initialdata = [];


const productSlice = createSlice({
    name: "productSlice",
    initialState: initialdata,
    reducers: {
        
        AddTocart: (state, action) => {
            state.push(action.payload);  
        }
    }
});


export const { AddTocart } = productSlice.actions;
export default productSlice.reducer;
