import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../features/category/categorySlice.js";
import { addProduct } from "../../features/product/productSlice.js";


const AddProduct = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("category", form.category);
    formData.append("description", form.description);
    formData.append("image", form.image);

    dispatch(addProduct(formData));
    setForm({})
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold text-green-600 mb-4">
        Add Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="" name="name" placeholder="Product Name"
          onChange={handleChange}
          value={form.name || ''}
          className="w-full p-2 border rounded" />

        <select name="category" onChange={handleChange}
          className="w-full p-2 border rounded" value={form.category || ''}>
          <option value="">Select Category</option>
          {categories.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>

        <textarea name="description" placeholder="Description"
          onChange={handleChange}
          value={form.description || ''}
          className="w-full p-2 border rounded" />

        <input  type="file"  name="image" onChange={handleChange}
          className="w-full" />

        <button className="w-full bg-green-600 text-white py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;