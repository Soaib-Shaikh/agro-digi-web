import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { sendContact } from "../features/contact/contactSlice";
import { errorToast } from "../utils/toast";

const Contact = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.contact);
   const { token } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  //  HANDLE CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //  HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!token) {
      errorToast("Please login first ❌");
      return;
    }

    //  VALIDATION
    if (!form.name || !form.email || !form.message) {
      errorToast("Please fill all required fields ❌");
      return;
    }

    dispatch(sendContact(form));

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/*  LEFT SIDE */}
        <div className="space-y-6">

          <h2 className="text-4xl font-bold text-green-600">
            Contact Us
          </h2>

          <p className="text-gray-600 max-w-md">
            We’re here to help you grow. Reach out for business inquiries,
            partnerships, or any support.
          </p>

          {/* Phone */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex gap-4">
            <div className="bg-green-100 p-4 rounded-full text-green-600 text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Keep in Touch</h3>
              <p className="text-gray-600 text-sm">+91 7359867199</p>
              <p className="text-gray-600 text-sm">+91 85119 00897</p>
            </div>
          </div>

          {/* Office */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex gap-4">
            <div className="bg-green-100 p-4 rounded-full text-green-600 text-xl">
              <FaBuilding />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Head Office</h3>
              <p className="text-gray-600 text-sm">
                A 315/316, 3rd Floor,<br />
                Maruti Palace, Dandi Road,<br />
                Navsari, Gujarat
              </p>
            </div>
          </div>

          {/* Factory */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex gap-4">
            <div className="bg-green-100 p-4 rounded-full text-green-600 text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Factory Location</h3>
              <p className="text-gray-600 text-sm">
                2432, GIDC, Kabilpore,<br />
                Navsari, Gujarat
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-green-600 text-white p-5 rounded-xl flex items-center gap-3">
            <FaEnvelope />
            <span>info@agridigitech.com</span>
          </div>

        </div>

        {/*  RIGHT SIDE FORM */}
        <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-green-700">

          <h2 className="text-2xl font-bold text-green-600 mb-6">
            Send Message
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border   focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Contact;