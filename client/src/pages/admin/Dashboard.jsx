import { useDispatch, useSelector } from "react-redux";
import {
    Package,
    Layers,
    Settings,
    Mail,
} from "lucide-react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
} from "recharts";
import { getAllProducts } from "../../features/product/productSlice";
import { getCategory } from "../../features/category/categorySlice";
import { getAllServices } from "../../features/service/serviceSlice";
import { getAllContacts } from "../../features/contact/contactSlice";
import { useEffect } from "react";

const Dashboard = () => {
    const { products = [] } = useSelector((state) => state.product);
    const { categories = [] } = useSelector((state) => state.category);
    const { services = [] } = useSelector((state) => state.service);
    const { contacts = [] } = useSelector((state) => state.contact);

    // 📊 Bar Chart Data (Counts)
    const statsData = [
        { name: "Products", value: products.length },
        { name: "Categories", value: categories.length },
        { name: "Services", value: services.length },
        { name: "Contacts", value: contacts.length },
    ];

    // 📈 Line Chart Data (Contacts per day - basic)
    const contactData = contacts.slice(0, 7).map((c, i) => ({
        name: `Day ${i + 1}`,
        contacts: i + 1,
    }));

    const cards = [
        { title: "Products", value: products.length, icon: <Package /> },
        { title: "Categories", value: categories.length, icon: <Layers /> },
        { title: "Services", value: services.length, icon: <Settings /> },
        { title: "Contacts", value: contacts.length, icon: <Mail /> },
    ];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getCategory());
        dispatch(getAllServices());
        dispatch(getAllContacts());
    }, [dispatch]);

    return (
        <div>
            <h1 className="text-3xl font-bold text-green-700 mb-6">
                🌿 Admin Dashboard
            </h1>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
                {cards.map((c, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white p-5 rounded-xl shadow"
                    >
                        <h3>{c.title}</h3>
                        <p className="text-2xl font-bold">{c.value}</p>
                    </div>
                ))}
            </div>

            {/* CHARTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                {/* BAR CHART */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="font-bold mb-3 text-green-600">
                        📊 Overview
                    </h2>

                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={statsData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#16a34a" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* LINE CHART */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="font-bold mb-3 text-green-600">
                        📈 Contacts Trend
                    </h2>

                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={contactData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Line
                                type="monotone"
                                dataKey="contacts"
                                stroke="#16a34a"
                                strokeWidth={3}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* RECENT CONTACTS */}
            <div className="bg-white p-4 rounded-xl shadow">
                <h2 className="font-bold text-green-600 mb-3">
                    📩 Recent Messages
                </h2>

                {contacts.slice(0, 5).map((c) => (
                    <div key={c._id} className="border-b py-2">
                        <p className="font-medium">{c.name}</p>
                        <p className="text-sm text-gray-500">{c.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;