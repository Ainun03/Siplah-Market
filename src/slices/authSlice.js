import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authService from "../services/authService";
import { toast } from "react-toastify";

// get User from localstorage
const API_URL = "http://localhost:8081"

const user = JSON.parse(localStorage.getItem('user'))
const isAuthenticated = JSON.parse(localStorage.getItem("user"))
    ? true
    : false;
const role = JSON.parse(localStorage.getItem("user"))
    ? ""
    : "";


const initialState = {
    isAuthenticated,
    user: user ? user : "",
    profil: {},
    role: role ? role: "",
    updateProfil:{},
    imageUser:{},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

export const registerUser = createAsyncThunk(
    "/api/register",
    async (user, thunkAPI) => {
      try {
        return await authService.register(user)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        toast.dismiss();
        toast.error(message);
        return thunkAPI.rejectWithValue(message)
      }
    }
  );
export const loginUser = createAsyncThunk(
    "/api/login",
    async (user, thunkAPI) => {
        // let url=`${API_URL}/login`
      try {
        return await authService.login(user)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        toast.dismiss();
        toast.error(message);
        return thunkAPI.rejectWithValue(message)
      }
    }
  );
  

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
        localStorage.removeItem("user");
        state.isAuthenticated = false;
        state.user= {
          applicationType:""
        };
        state.isError= false;
        state.isSuccess= false;
        state.profil={}
    },
  },
  extraReducers: (builder) => {

    builder
      .addCase(registerUser.pending, (state) => {
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        // state.user = null
      })

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false
        state.isSuccess = true 
        state.user=action.payload
        
        
        
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
     
    }
})
export const { logout } = authSlice.actions;

export default authSlice.reducer;