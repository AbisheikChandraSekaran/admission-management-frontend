import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name:"wishlist",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state,action)=>{
            state.items.push(action.payload)
        },
        setWishlist: (state, action) => {
            state.items = action.payload;
        }
    },
});

export const {addItem, setWishlist} = wishListSlice.actions;
export default wishListSlice.reducer