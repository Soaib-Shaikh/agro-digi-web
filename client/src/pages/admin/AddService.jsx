import { useState } from "react";
import { useDispatch } from "react-redux";
import { addService } from "../../features/service/serviceSlice";

const AddService = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    image: null,
  });

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
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("image", form.image);

    dispatch(addService(formData));
    setForm({})
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold text-green-600 mb-4">
        Add Service
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input type="file" name="image" onChange={handleChange}
          className="w-full" />

        <input name="title" value={form.title || ''} placeholder="Service Title"
          onChange={handleChange}
          className="w-full p-2 border rounded" />

        <textarea name="description" placeholder="Description"
          onChange={handleChange}
          value={form.description || ''}
          className="w-full p-2 border rounded" />

        <select
          name="category"
          value={form.category || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="IT Solutions">IT Solutions</option>
          <option value="Public Relations">Public Relations</option>
          <option value="Event Management">Event Management</option>
          <option value="Design & Printing">Design & Printing</option>
        </select>

        <button className="w-full bg-green-600 text-white py-2 rounded">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;