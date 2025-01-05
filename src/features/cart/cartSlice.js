import { createSlice } from "@reduxjs/toolkit";

// Initial state is a number (0)
const initialdata = 0;

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: initialdata,
    reducers: {
        // Reducer to increment the state by 1
        cartAdd: (state) => {
            return state + 1; // return the incremented value
        }
    }
});

// Export the action and the reducer
export const { cartAdd } = cartSlice.actions;
export default cartSlice.reducer;
