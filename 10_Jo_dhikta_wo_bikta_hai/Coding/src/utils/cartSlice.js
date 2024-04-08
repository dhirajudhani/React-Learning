import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items: []
    },
    reducers:{
        addItems : (state, action) => {
            // mutating our state here
            state.items.push(action.payload);
        },
        removeItems : (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0; // makes items array clear with length 0 []
        }
    }
})

export const {addItems,removeItems,clearCart} = cartSlice.actions

export default cartSlice.reducer;