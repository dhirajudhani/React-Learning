import { createSlice,current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items: []
    },
    reducers:{
        //Vanilla (older) Redux => DON'T HAVE TO MUTATE
        // const newState = [...state]
        // newState.items.push(action.payload)
        //return newstate;


        // Redux toolkit uses immer bts
        // we have to mutate the state
        addItems : (state, action) => {
            // mutating our state here
            state.items.push(action.payload);
        },
        removeItems : (state) => {
            state.items.pop();
        },

        //orignalState = ["pizza"]
        clearCart : (state) => {
            // console.log(state);//[pizza]
            // console.log(current(state))
            // state = [] // [] but orignal state remain [pizza]
            // console.log(state);


            //RTK - either  mutate the existing state or return a new state

            // orignalState = []
            state.items.length = 0; // makes items array clear with length 0 []
        }
    }
})

export const {addItems,removeItems,clearCart} = cartSlice.actions

export default cartSlice.reducer;