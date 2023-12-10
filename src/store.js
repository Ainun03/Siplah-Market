import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./slices/productsSlice";
import authSlice from "./slices/authSlice";

const reducer={
    product: productsSlice,
    auth: authSlice,
}
export const store = configureStore({
    reducer:reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});