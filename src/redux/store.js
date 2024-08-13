import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./wishListSlice";
import userSlice from "./userSlice";
import courseSlice from "./courseSlice";

const store = configureStore({
    reducer: {
        wishlist: wishListSlice,
        user: userSlice,
        course: courseSlice,
    },
});

export default store;