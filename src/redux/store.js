import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./wishList";

const store = configureStore({
    reducer: {
        wishlist: wishListSlice,
    },
});

export default store;