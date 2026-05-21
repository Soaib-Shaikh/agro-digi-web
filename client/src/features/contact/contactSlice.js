import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstence.js";
import { errorToast, successToast } from "../../utils/toast.js";

//  SEND CONTACT
export const sendContact = createAsyncThunk(
  "contact/send",
  async (data, { rejectWithValue }) => {
    try {
      const res = await apiInstance.post("/contacts", data);
      return res.data.contact;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

//  GET ALL
export const getAllContacts = createAsyncThunk(
  "contact/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiInstance.get("/contacts");
      return res.data.contacts;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

//  DELETE
export const deleteContact = createAsyncThunk(
  "contact/delete",
  async (id, { rejectWithValue }) => {
    try {
      await apiInstance.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // SEND
      .addCase(sendContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendContact.fulfilled, (state) => {
        state.loading = false;
        successToast("Message sent successfully.");
      })
      .addCase(sendContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
        errorToast(action.payload?.message || "Failed to send message.");
      })

      // GET
      .addCase(getAllContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(getAllContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // DELETE
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (c) => c._id !== action.payload
        );
      });
  },
});

export default contactSlice.reducer;