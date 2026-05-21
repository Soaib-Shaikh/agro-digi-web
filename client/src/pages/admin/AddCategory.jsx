import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../features/category/categorySlice";

const AddCategory = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory({ name }));
    setName("");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold text-green-600 mb-4">
        Add Category
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category Name"
          className="w-full p-2 border rounded mb-4"
        />

        <button className="w-full bg-green-600 text-white py-2 rounded">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;