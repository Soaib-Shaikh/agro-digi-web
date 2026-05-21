import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, getCategory } from "../../features/category/categorySlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories = [] } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-xl font-bold text-green-600 mb-4">
        Categories List
      </h2>

      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-2">SR.NO</th>
              <th className="p-2">Category Name</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {categories.length > 0 ? (
              categories.map((c, index) => (
                <tr key={c._id} className="border-b">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{c.name}</td>

                  <td className="p-2">
                    <button
                      onClick={() => dispatch(deleteCategory(c._id))}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-4">
                  No Categories Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;