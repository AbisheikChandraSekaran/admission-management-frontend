import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name:"wishlist",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state,action)=>{
            state.items.push(action.payload)
        }
    },
});

export const {addItem} = wishListSlice.actions;
export default wishListSlice.reducer