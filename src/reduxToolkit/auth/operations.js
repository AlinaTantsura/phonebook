import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const createUser = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const resp = await axios.post('/users/signup', credentials);
            setAuthToken(resp.data.token);
            return resp.data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)