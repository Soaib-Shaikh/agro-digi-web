import { useNavigate, useLocation } from "react-router-dom";
import { FaPepperHot, FaSeedling, FaAppleAlt, FaCarrot } from "react-icons/fa";
import { FaTractor, FaFlask, FaBug, FaTint } from "react-icons/fa";

const exportCategories = [
  {
    name: "Spices",
    desc: "Authentic and aromatic, processed with care to retain natural flavor and purity.",
    icon: <FaPepperHot />,
    bg: "bg-red-50",
  },
  {
    name: "Grains",
    desc: "Nutrient-rich staples cleaned, graded, and packed for global supply chains.",
    icon: <FaSeedling />,
    bg: "bg-yellow-50",
  },
  {
    name: "Fruits",
    desc: "Fresh, seasonal, and responsibly harvested for long-lasting shelf life.",
    icon: <FaAppleAlt />,
    bg: "bg-green-50",
  },
  {
    name: "Vegetables",
    desc: "Sustainably grown and hygienically packed to preserve freshness and quality.",
    icon: <FaCarrot />,
    bg: "bg-lime-50",
  },
];

// 🔥 NEW BIG CATEGORIES
const agriInputs = [
  {
    name: "Seed",
    icon: <FaSeedling />,
  },
  {
    name: "Machinery",
    icon: <FaTractor />,
  },
  {
    name: "Fertilizer",
    icon: <FaFlask />,
  },
  {
    name: "Pesticides",
    icon: <FaBug />,
  },
  {
    name: "Drip",
    icon: <FaTint />,
  },
];

const ProductsClient = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  // 🔥 HIDE WHEN FILTER ACTIVE
  if (category) return null;

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">

      {/* 🔥 HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-6">
        Our Products
      </h2>

      {/* 🔥 DESCRIPTION */}
      <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600 leading-relaxed">
        At <span className="text-green-600 font-semibold">AgriDigi Tech</span>, we specialize in exporting a diverse range of
        <span className="text-green-600 font-semibold"> high-quality farm produce</span> sourced from trusted growers across
        <span className="text-green-600 font-semibold"> Pan India</span>.

        Driven by experience and strong sourcing networks, we transform
        <span className="text-green-600 font-semibold"> high-quality premium food ingredients</span> for international markets—combining
        <span className="text-green-600 font-semibold"> authenticity, quality, and cost efficiency</span>.

        Our product categories are carefully curated to meet global standards of
        <span className="text-green-600 font-semibold"> freshness, quality, and sustainability</span>.
      </p>

      {/* 🔥 EXPORT PRODUCTS */}
      <h3 className="text-2xl font-semibold text-green-600 mb-6">
        Export Products
      </h3>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {exportCategories.map((cat, index) => (
          <div
            key={index}
            onClick={() => navigate(`/products?category=${cat.name}`)}
            className={`${cat.bg} p-6 rounded-2xl shadow-md hover:shadow-xl cursor-pointer transition`}
          >
            <div className="text-3xl text-green-600 mb-4">{cat.icon}</div>
            <h3 className="text-xl font-bold">{cat.name}</h3>
            <p className="text-sm text-gray-600">{cat.desc}</p>
          </div>
        ))}
      </div>

      {/* 🔥 AGRI INPUT SECTION */}
      <h3 className="text-2xl font-semibold text-green-600 mb-6">
        Agri Input Solutions
      </h3>

      <div className="grid md:grid-cols-5 gap-4">
        {agriInputs.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/products/${item.name.toLowerCase()}`)}
            className="bg-white border p-5 rounded-xl text-center cursor-pointer hover:shadow-lg transition"
          >
            <div className="text-2xl text-green-600 mb-2">
              {item.icon}
            </div>
            <p className="font-semibold">{item.name}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ProductsClient;