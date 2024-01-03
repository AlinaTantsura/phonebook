import { createSlice } from "@reduxjs/toolkit";
import { logIn, register } from "./operations";

const authInitialState = {
    user: { name: null, email: null },
    token: null,
    isLogIn: false,
    isRefreshing: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: builder => {
        builder.addCase(register.pending, (state, action) => { })
            .addCase(register.fullfield, (state, action) => { 
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogIn = true;
            })
            .addCase(register.rejected, (state, action) => { })
            .addCase(logIn.fullfield, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogIn = true;
            })
           
    }
});


// export const { register, logIn } = authSlice.actions;
export const authReduser = authSlice.reducer;