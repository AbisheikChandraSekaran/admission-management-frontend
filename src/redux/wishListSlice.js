import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        setWishlist: (state, action) => {
            state.items = action.payload;
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                item => item.courseId !== action.payload
            );
        },
       
    },
});

export const { addItem, removeItem, setWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;
