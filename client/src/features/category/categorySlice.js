import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import apiInstance from "../../api/apiInstence";
import { errorToast, successToast } from "../../utils/toast";

export const getCategory = createAsyncThunk("category/getAll", async (_, { rejectWithValue }) => {
    try {
        const res = await apiInstance.get("/category")
        return res.data.categories;
    } catch (error) {
        return rejectWithValue(error.response?.data);
    }
})

export const addCategory = createAsyncThunk("category/add", async (category, { rejectWithValue }) => {
    try {
        const res = await apiInstance.post('/category', category)
        return res.data.category;
    } catch (error) {
        return rejectWithValue(error.response?.data);

    }
})

export const deleteCategory = createAsyncThunk("category/delete", async (id, { rejectWithValue }) => {
    try {
        await apiInstance.delete(`/catergory/${id}`)
        return id;
    } catch (error) {
        return rejectWithValue(error.response?.data);

    }
})

const categorySlice = createSlice({
    name: "category",
    initialState: {
        loading: false,
        error: null,
        categories: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Get All Categories
            .addCase(getCategory.pending, (state) => {
                state.loading= true,
                state.error = null;
            })
            .addCase(getCategory.fulfilled, (state, action)=>{
                state.loading = false;
                state.categories = action.payload;
                state.error = null;
            })
            .addCase(getCategory.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload?.message || "Something went wrong";
            })

        // Add Category
            .addCase(addCategory.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(addCategory.fulfilled, (state,action)=> {
                state.loading = false;
                state.categories.push(action.payload);
                state.error = null;
                successToast("Category Added Successfully ✅");
            })
            .addCase(addCategory.rejected, (state, action)=>{
                state.loading = false;
                errorToast(action.payload?.message);
            })

        // Delete Category
            .addCase(deleteCategory.pending, (state)=> {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteCategory.fulfilled, (state, action)=>{
                state.loading = false;
                state.categories = state.categories.filter((cat)=> cat._id != action.payload)
                successToast("Category Deleted Successfully ✅");
            })
            .addCase(deleteCategory.rejected, (state, action)=>{
                state.loading = false;
                errorToast(action.payload?.message);
            })
    }
})

export default categorySlice.reducer;