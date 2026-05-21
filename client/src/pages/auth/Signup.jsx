import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(registerUser(form));
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      <div className="hidden md:block w-1/2">
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white">
        <h2 className="text-3xl font-bold text-green-600 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="w-80 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
            Signup
          </button>

          <p className="text-sm mt-4 text-center">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-green-600 cursor-pointer font-semibold"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;