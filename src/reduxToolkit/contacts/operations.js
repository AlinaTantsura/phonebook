import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        const isLogin = thunkAPI.getState().auth.isLogIn;
        if (!isLogin) return;
        try {
            const resp = await axios.get('/contacts')
            return resp.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const addContactBase = createAsyncThunk(
    "contacts/addContact",
    async (obj, thunkAPI) => {
        try {
            const resp = await axios.post('/contacts', obj);
            return resp.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (contactId, thunkAPI) => {
        try {
            const resp = await axios.delete(`/contacts/${contactId}`);
            return resp
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const handleFavorite = createAsyncThunk(
    "contacts/handleFavorite",
    async ({contactId, favorite}, thunkAPI) => {
        try {
            const resp = await axios.patch(`/contacts/${contactId}/favorite`, { "favorite": favorite });
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)