import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = 'https://www.thecocktaildb.com'
const API_URL_ADD = 'http://localhost:8081'

const initialState = {
    products:[],
    addProducts:[],
    isLoading: false,
};

export const getProducts = createAsyncThunk(
    "/api/json/v1/1/search.php?f=b",
    async (payload,thunkAPI) => {
        let url=`${API_URL}/api/json/v1/1/search.php?f=b`
  
        try {
            const resp = await axios.get(url); 
            const { data } = resp;
            return data.drinks;
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
export const postProducts = createAsyncThunk(
    "/api/create-post",
    async (payload,thunkAPI) => {
      console.log(payload)
        let url=`${API_URL_ADD}/api/create-post`
        try {
            const resp = await axios.post(url,JSON.stringify(payload),
              {
                headers: {
                  // Authorization: "Bearer " + token,
                  accept: "*/*",
                  "Content-Type": "application/json",
                },
              }); 
            const { data } = resp;
            return data;
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

  export const productsSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      logout: (state) => {
        //   localStorage.removeItem("banner");
          state.bannerPost= {}
      },
    },
    extraReducers: (builder) => {
      builder      
        .addCase(getProducts.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getProducts.fulfilled, (state, action) => {
          // state.isAuthenticated = true;
          state.products = action.payload ? action.payload : [];
        })
        .addCase(getProducts.rejected, (state, action) => {
          state.isLoading = false
        //   state.isError = true
          state.message = action.payload
        }) 
        .addCase(postProducts.pending, (state) => {
          state.isLoading = true
        })
        .addCase(postProducts.fulfilled, (state, action) => {
          // state.isAuthenticated = true;
          state.addProducts = action.payload ? action.payload : [];
          console.log(state.addProducts)

        })
        .addCase(postProducts.rejected, (state, action) => {
          state.isLoading = false
        //   state.isError = true
          state.message = action.payload
        }) 
      }
  })
  
  
  export const { logout } = productsSlice.actions;
  
  export default productsSlice.reducer;