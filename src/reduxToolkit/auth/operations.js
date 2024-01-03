import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const resp = await axios.post('/users/signup', credentials);
            // setAuthToken(resp.data.token);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    "auth/logIn",
    async (credentials, thunkAPI) => {
        
        try {
            const resp = await axios.post('/users/login', credentials);
            setAuthToken(resp.data.token);
            return resp.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)