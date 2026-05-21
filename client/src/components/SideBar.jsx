import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    Package,
    PlusSquare,
    Layers,
    Settings,
    Mail,
    ChevronDown,
} from "lucide-react";
import logo from "../assets/images/logo.jpg";

const Sidebar = () => {
    const { pathname } = useLocation();
    const [open, setOpen] = useState(null);

    const isActive = (path) =>
        pathname === path
            ? "bg-green-600 text-white"
            : "text-gray-300 hover:bg-green-500 hover:text-white";

    const toggleMenu = (menu) => {
        setOpen(open === menu ? null : menu);
    };

    return (
        <div className="w-64 bg-gray-900 text-white h-screen p-5">
            <div className="flex flex-col items-center mb-6">
                <img
                    src={logo}
                    alt="logo"
                    className="h-12 w-auto object-contain"
                />

                <span className="text-sm font-semibold text-green-500 mt-1 text-center">
                    AgriDigi Admin
                </span>
            </div>

            {/* DASHBOARD */}
            <Link
                to="/admin/dashboard"
                className={`flex items-center gap-2 px-4 py-2 rounded ${isActive(
                    "/admin/dashboard"
                )}`}
            >
                <LayoutDashboard size={18} />
                Dashboard
            </Link>

            {/* PRODUCTS */}
            <div className="mt-4">
                <button
                    onClick={() => toggleMenu("product")}
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:bg-green-500 rounded"
                >
                    <span className="flex items-center gap-2">
                        <Package size={18} />
                        Products
                    </span>
                    <ChevronDown size={16} />
                </button>

                {open === "product" && (
                    <div className="ml-6 mt-2 space-y-2">
                        <Link
                            to="/admin/products"
                            className={`block px-2 py-1 rounded ${isActive(
                                "/admin/products"
                            )}`}
                        >
                            View Products
                        </Link>
                        <Link
                            to="/admin/add-product"
                            className={`block px-2 py-1 rounded ${isActive(
                                "/admin/add-product"
                            )}`}
                        >
                            Add Product
                        </Link>
                    </div>
                )}
            </div>

            {/* CATEGORIES */}
            <div className="mt-4">
                <button
                    onClick={() => toggleMenu("category")}
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:bg-green-500 rounded"
                >
                    <span className="flex items-center gap-2">
                        <Layers size={18} />
                        Categories
                    </span>
                    <ChevronDown size={16} />
                </button>

                {open === "category" && (
                    <div className="ml-6 mt-2 space-y-2">
                        <Link
                            to="/admin/categories"
                            className={`block px-2 py-1 rounded ${isActive(
                                "/admin/categories"
                            )}`}
                        >
                            View Categories
                        </Link>
                        <Link
                            to="/admin/add-category"
                            className={`block px-2 py-1 rounded ${isActive(
                                "/admin/add-category"
                            )}`}
                        >
                            Add Category
                        </Link>
                    </div>
                )}
            </div>

            {/* SERVICES */}
            <div className="mt-4">
                <button
                    onClick={() => toggleMenu("service")}
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:bg-green-500 rounded"
                >
                    <span className="flex items-center gap-2">
                        <Settings size={18} />
                        Services
                    </span>
                    <ChevronDown size={16} />
                </button>

                {open === "service" && (
                    <div className="ml-6 mt-2 space-y-2">
                        <Link
                            to="/admin/services"
                            className={`block px-2 py-1 rounded ${isActive(
                                "/admin/services"
                            )}`}
                        >
                            View Services
                        </Link>
                        <Link
                            to="/admin/add-service"
                            className={`block px-2 py-1 rounded ${isActive(
                                "/admin/add-service"
                            )}`}
                        >
                            Add Service
                        </Link>
                    </div>
                )}
            </div>

            {/* CONTACT */}
            <Link
                to="/admin/contacts"
                className={`flex items-center gap-2 px-4 py-2 mt-4 rounded ${isActive(
                    "/admin/contacts"
                )}`}
            >
                <Mail size={18} />
                Contacts
            </Link>
        </div>
    );
};

export default Sidebar;