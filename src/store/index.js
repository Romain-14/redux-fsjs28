import { configureStore } from "@reduxjs/toolkit";

// import slice/reducer
import productReducer from "./slices/product";
import userReducer from "./slices/user";

const store = configureStore({
    reducer: {
        product: productReducer,
        user: userReducer,
    },
});

export { store };
