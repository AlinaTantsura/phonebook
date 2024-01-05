import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register } from "./operations";

const authInitialState = {
    user: { name: null, email: null },
    token: null,
    isLogIn: false,
    isRefreshing: false,
    // isLoad: false,
    // error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogIn = true;
        })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogIn = true;

            }).addCase(logOut.fulfilled, (state, action) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLogIn = false;
        })
    }
    
    });

export const authReducer = authSlice.reducer;