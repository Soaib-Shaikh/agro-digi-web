import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstence";
import { errorToast, successToast } from "../../utils/toast";


export const addService = createAsyncThunk("service/add", async (service, {rejectWithValue})=>{
    try {
       const res = await apiInstance.post("/services", service);
       return res.data.service;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const getAllServices = createAsyncThunk("service/getAll", async (_, {rejectWithValue})=>{
    try {
        const res = await apiInstance.get("/services");
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message);
        
    }
})

export const getSingleService = createAsyncThunk("service/getSingle", async (id, {rejectWithValue})=>{
    try {
        const res = await apiInstance.get(`/services/${id}`);
        return res.data.service;
    } catch (error) {
        return rejectWithValue(error.message);
        
    }
})

export const deleteService = createAsyncThunk("service/delete", async (id, {rejectWithValue})=>{
    try {
        await apiInstance.delete(`/services/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error.message);
        
    }
})

const serviceSlice = createSlice({
    name: "service",
    initialState: {
        services: [],
        singleService: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        // add service
            .addCase(addService.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(addService.fulfilled, (state, action)=>{
                state.loading = false;
                state.services.unshift(action.payload);
                successToast("Service Added Successfully ✅");
            })
            .addCase(addService.rejected, (state, action)=> {
                state.loading = false;
                errorToast(action.payload?.message || "Something went wrong");
            })

        // get all services
            .addCase(getAllServices.pending, (state)=> {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllServices.fulfilled, (state, action)=>{
                state.loading = false;  
                state.services = action.payload;
            })
            .addCase(getAllServices.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload?.message;
            })
        
        // get single service
            .addCase(getSingleService.pending, (state)=> {
                state.loading = true;
                state.error = null;
            })
            .addCase(getSingleService.fulfilled, (state, action) => {
                state.loading = false;
                state.singleService = action.payload;
            })
            .addCase(getSingleService.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload?.message;
            })

        // delete service
            .addCase(deleteService.pending, (state)=> {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteService.fulfilled, (state, action)=>{
                state.loading = false;
                state.services = state.services.filter(s => s._id != action.payload)
                successToast("Service Deleted Successfully ✅");
            })
            .addCase(deleteService.rejected, (state, action)=>{
                state.loading = false;
                errorToast(action.payload?.message || "Something went wrong");
            })
    }
})

export default serviceSlice.reducer;