import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance  from "../../api/apiInstence.js";
import { errorToast, successToast } from "../../utils/toast.js";

// REGISTER
export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      const res = await apiInstance.post("/auth/register", user);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// LOGIN
export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const res = await apiInstance.post("/auth/login", user);

      localStorage.setItem("token", res.data.token);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
    isAuth: !!localStorage.getItem("token"),
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        successToast("User Register Successfully ✅");
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        errorToast(action.payload?.message);
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        successToast("Login Successfully ✅");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        errorToast(action.payload?.message);
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;