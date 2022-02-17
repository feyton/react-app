import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from './authService.js';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  authenticated: false,
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const register = createAsyncThunk(
  'auth',
  async (user, thunkAPI) => {
    try {
      return await AuthService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.message = '';
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
    },
    loginUser: (state) => {
      state.authenticated = true;
    },
    logoutUser: (state) => {
      state.authenticated = false;
    },
    signupUser: (state) => {
      state.authenticated = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  }
});

export const { reset, loginUser, logoutUser, signupUser } = authSlice.actions;

export default authSlice;
