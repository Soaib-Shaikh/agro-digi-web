import { useNavigate } from "react-router-dom";
import heroImage from '../assets/images/hero-image.jpeg'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[90vh] flex items-center justify-center text-center text-white">

      {/* Background */}
      <img
        src={heroImage}
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-green-400">
          AgriDigi Tech Export
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Freshness You Can Trust, Exports You Can Count On
        </p>

        {/* 🔥 Button with route */}
        <button
          onClick={() => navigate("/products")}
          className="mt-6 bg-green-600 px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Explore Products
        </button>
      </div>

    </div>
  );
};

export default Hero;