import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/product/productSlice.js";
import { useLocation } from "react-router-dom";
import BackButton from "../../components/BackButton.jsx";

// 🔥 CATEGORY CONTENT MAP
const categoryContent = {
  Spices: "We export a wide range of authentic Indian spices, known globally for their rich aroma, bold flavor, and natural purity. Sourced directly from trusted farms, our spices are hygienically processed, graded, and packaged to meet international quality standards. Each batch is carefully handled to retain maximum freshness from farm to shipment.",

  Grains: "Our grain exports include top-grade agricultural staples cultivated across Pan India, known for their nutritional value and purity. We ensure meticulous cleaning, grading, and moisture control before packaging to suit international market requirements. Bulk and custom packaging solutions are available for both wholesale and retail needs.",

  Fruits: "We offer a wide selection of fresh, seasonal fruits grown using sustainable farming practices across India's diverse regions. Harvested at the right stage of ripeness, our fruits are carefully sorted, packed, and shipped to maintain natural taste and shelf life. Strict cold-chain management ensures freshness throughout transit.",

  Vegetables: "We offer a consistent supply of high-quality vegetables. Grown using sustainable farming practices, our produce is sorted, graded, and exported with strict quality control. Timely harvesting and fast logistics ensure they reach markets in peak condition.",
};

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  const [search, setSearch] = useState("");

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // 🔥 FILTER LOGIC (SAFE)
  const filteredProducts = products.filter((p) => {
    let productCategory = "";

    if (typeof p.category === "string") {
      productCategory = p.category;
    } else if (p.category?.name) {
      productCategory = p.category.name;
    } else if (Array.isArray(p.category)) {
      productCategory = p.category[0];
    }

    const matchCategory = category
      ? productCategory.toLowerCase() === category.toLowerCase()
      : true;

    const matchSearch = p.name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="px-6 md:px-12 py-12">

      {/* 🔥 CATEGORY TITLE + CONTENT */}
      {category && <BackButton/>} {(
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-600">
            {category}
          </h2>

          {/* 🔥 DESCRIPTION */}
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            {categoryContent[category]}
          </p>
        </div>
      )}

      {/* 🔍 SEARCH */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-1/3 p-3 border rounded focus:outline-green-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* PRODUCTS */}
      <div className="grid md:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div key={p._id} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
              <img src={p.image} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">
            No products found
          </p>
        )}
      </div>

    </div>
  );
};

export default ProductsList;