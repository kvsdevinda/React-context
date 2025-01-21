import { configureStore } from "@reduxjs/toolkit";  // Use import to keep it consistent
import authSlice from "./authSlice";  // Import authSlice properly
import PostSlice from "./PostSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        Post: PostSlice,
    },
});

export default store;
