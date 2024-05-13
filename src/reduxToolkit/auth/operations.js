import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createStandaloneToast } from '@chakra-ui/react'
const { toast } = createStandaloneToast()


axios.defaults.baseURL = 'https://contactslistbackend-huoj.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3001/api';

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
            toast({
                position: 'top-right',
                description: "Register in process. Thanks for your waiting)))",
                status: 'info',
                duration: 4000,
            })
            const resp = await axios.post('/users/register', credentials);
            setAuthToken(resp.data.token);
            return resp.data;
        } catch (error) {
            console.log(error.message)
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
            toast({
                position: 'top-right',
                description: "Login in process. Thanks for your waiting)))",
                status: 'info',
                duration: 4000,
            })
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

export const verifyFunc = createAsyncThunk(
    "auth/verify",
    async (credentials, thunkAPI) => {
        try {
            await axios.post('/users/verify', credentials);
            toast({
                position: 'top-right',
                title: 'Success',
                description: "Verification email was sent) ",
                status: 'success',
                duration: 4000,
            })
    
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