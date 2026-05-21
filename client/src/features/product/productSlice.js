import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstence.js";
import { errorToast, successToast } from "../../utils/toast.js";

export const getAllProducts = createAsyncThunk("product/getAll", async(_, {rejectWithValue})=>{
    try {
        const res = await apiInstance.get("/products")
        return res.data.products;
    } catch (error) {
        return rejectWithValue(error.response?.data);
    }
})

export const addProduct = createAsyncThunk("product/add", async(product, {rejectWithValue})=>{
    try {
        const res = await apiInstance.post('/products', product)
        return res.data.product;
    } catch (error) {
        return rejectWithValue(error.response?.data);
    }
})

export const deleteProduct = createAsyncThunk("product/delete", async(id, {rejectWithValue})=>{
    try {
        await apiInstance.delete(`/products/${id}`)
        return id;
    } catch (error) {
         return rejectWithValue(error.response?.data);
    }
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        loading: false,
        error: null,
        total: 0,
        page: 1,
        pages: 1,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        // GET ALL PRODUCTS
            .addCase(getAllProducts.pending, (state) =>{
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.total = action.payload.length;
                state.page = 1;
                state.pages = 1;
            })
            .addCase(getAllProducts.rejected, (state,action)=>{
                state.loading = false;
                state.error = action.payload?.message || "Something went wrong";
            })

        // ADD PRODUCT
            .addCase(addProduct.pending, (state)=> {
                state.loading = true;
                state.error = null;
            })
            .addCase(addProduct.fulfilled, (state, action)=>{
                state.loading = false;
                state.products.unshift(action.payload);
                successToast("Product Added Successfully ✅");
            })
            .addCase(addProduct.rejected, (state, action)=>{
                state.loading = false;
                errorToast(action.payload?.message || "Something went wrong");
            })

        // DELETE PRODUCT
            .addCase(deleteProduct.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state,action)=>{
                state.loading = false;
                state.products = state.products.filter((p) => p._id != action.payload)
                successToast("Product Deleted Successfully ✅");
            })
            .addCase(deleteProduct.rejected, (state, action)=>{
                state.loading = false;
                errorToast(action.payload?.message || "Something went wrong");
            })
    }
})

export default productSlice.reducer;