import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createStandaloneToast } from '@chakra-ui/react'
const { toast } = createStandaloneToast()


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
            toast({
                position: 'top-right',
                title: 'E-mail is already used.',
                description: "Please, log in or use another e-mail.",
                status: 'error',
                duration: 4000,
            })
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
            toast({
                position: 'top-right',
                title: 'Wrong e-mail or password.',
                description: "Maybe you are not registered)",
                status: 'error',
                duration: 4000,
            })
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