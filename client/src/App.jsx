import { Routes, Route, Navigate } from "react-router-dom";

// Auth
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import ProtectedRoute from "./routes/ProtectedRoute";

//Admin
import AdminLayouts from "./layouts/AdminLayouts";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Categories from "./pages/admin/Categories";
import AddCategory from "./pages/admin/AddCategory";
import Services from "./pages/admin/Services";
import AddService from "./pages/admin/AddService";
import Contacts from "./pages/admin/Contacts";
import AddProduct from "./pages/admin/AddProduct";
import { Toaster } from "react-hot-toast";
import MainLayout from "./layouts/MainLayout";

// Client
import Home from "./pages/Home";
import About from "./pages/About";
import ProductsClient from "./pages/products/ProductsClient";
import Contact from "./pages/Contact";
import ProductsPage from "./pages/products/ProductsPage";
import Consulting from "./pages/Consulting";
import ServicesPage from "./pages/services/ServicesPage";
import ProductDetails from "./pages/products/ProductDetails";



const App = () => {
  return (
    <>
      <Toaster position="top-right"/>

      <Routes>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        {/* Client Routes */}
        <Route element={<MainLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<ServicesPage/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/consulting" element={<Consulting/>}/>
            <Route path="/products/:category" element={<ProductDetails/>} />

        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayouts />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="products" element={<Products />} />
          <Route path="add-product" element={<AddProduct />} />

          <Route path="categories" element={<Categories />} />
          <Route path="add-category" element={<AddCategory />} />

          <Route path="services" element={<Services />} />
          <Route path="add-service" element={<AddService />} />

          <Route path="contacts" element={<Contacts />} />
        </Route>

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;