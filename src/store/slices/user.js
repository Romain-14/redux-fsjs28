import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: {
        isLogged: false,
        alias: "john doe",
    },
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signIn: (state, action) => {
            console.log(action)
            state.info = { isLogged: true, alias: action.payload };
        },
        signOut: (state, action) => {
            state.info = { isLogged: false, alias: "john doe" };
        },
    },
});

//  EXPORT
export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;