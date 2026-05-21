import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(loginUser(form));

    if (res.meta.requestStatus === "fulfilled") {
      const role = res.payload.user.role;

      if (role == "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Image */}
      <div className="hidden md:block w-1/2">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white">
        <h2 className="text-3xl font-bold text-green-600 mb-6">
          AgroDigi Login
        </h2>

        <form onSubmit={handleSubmit} className="w-80 space-y-4">
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
            Login
          </button>

          <p className="text-sm mt-4 text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-green-600 cursor-pointer font-semibold"
            >
              Signup
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;