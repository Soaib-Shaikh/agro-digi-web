import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice.js'
import productReducer from '../features/product/productSlice.js'
import categoryReducer from '../features/category/categorySlice.js'
import contactReducer from '../features/contact/contactSlice.js'
import serviceReducer from '../features/service/serviceSlice.js'

const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        category: categoryReducer,
        contact: contactReducer,
        service: serviceReducer,
    }
})

export default store;