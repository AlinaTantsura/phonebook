import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
    axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const resp = await axios.post('/users/signup', credentials);
            setAuthToken(resp.data.token);
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
);

export const logOut = createAsyncThunk(
    "auth/logOut",
    async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout")
            clearAuthToken();
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    "auth/refreshUser",
    async (_, thunkAPI) => {
        const token = thunkAPI.getState().auth.token;
        if (!token) return thunkAPI.rejectWithValue('Something wrong');
        // console.log(foo)
         setAuthToken(token);
        try {
            const resp = await axios.get('/users/current')
            return resp.data;
         }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)