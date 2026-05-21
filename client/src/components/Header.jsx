import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import logo from "../assets/images/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);

  const navLinkStyle = ({ isActive }) =>
    isActive ? "text-white font-semibold underline" : "hover:text-green-200";

  // 🔥 close dropdown outside
  useEffect(() => {
    const handleClick = () => {
      setOpenDropdown(false);
      setUserDropdown(false);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // 🔥 logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="bg-green-600 shadow sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">

        {/* Logo */}
        <Link to="/">
          <img src={logo} className="h-10 w-auto" alt="logo" />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">

          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/about" className={navLinkStyle}>About</NavLink>
          <NavLink to="/products" className={navLinkStyle}>Products</NavLink>

          {/* Services */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpenDropdown(!openDropdown)}>
              Services ▾
            </button>

            {openDropdown && (
              <div className="absolute bg-white text-black shadow-lg rounded mt-3 w-56 p-3">
                <Link to="/services" className="block py-1 hover:text-green-600">All Services</Link>
                <Link to="/services?category=Business Management Solutions" className="block py-1">Business</Link>
                <Link to="/services?category=Market Planning" className="block py-1">Market</Link>
              </div>
            )}
          </div>

          <NavLink to="/consulting" className={navLinkStyle}>Consulting</NavLink>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>

          {/* 🔥 AUTH UI */}
          {!token ? (
            <Link to="/login">
              <button className="bg-white text-green-600 px-5 py-2 rounded">
                Login
              </button>
            </Link>
          ) : (
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setUserDropdown(!userDropdown)}
                className="bg-white text-green-600 px-4 py-2 rounded"
              >
                {user?.name || "User"} ▾
              </button>

              {userDropdown && (
                <div className="absolute right-0 bg-white text-black shadow-lg rounded mt-3 w-40 p-2">
                  
                  <Link
                    to="/profile"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    My Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          )}

        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-600 text-white px-6 py-4 space-y-3">

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>

          {!token ? (
            <Link to="/login">
              <button className="w-full bg-white text-green-600 py-2 rounded">
                Login
              </button>
            </Link>
          ) : (
            <>
              <p className="font-semibold">{user?.name}</p>
              <Link to="/profile">My Profile</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}

        </div>
      )}
    </header>
  );
};

export default Header;