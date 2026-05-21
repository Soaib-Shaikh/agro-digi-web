import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-green-600">
        Admin Dashboard
      </h1>

      <button
        onClick={handleLogout}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;