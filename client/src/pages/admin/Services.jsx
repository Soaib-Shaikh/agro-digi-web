import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteService, getAllServices } from "../../features/service/serviceSlice";

const Services = () => {
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.service);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-xl font-bold text-green-600 mb-4">
        Services List
      </h2>

      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-2">SR.NO</th>
              <th className="p-2">Image</th>
              <th className="p-2">Title</th>
              <th className="p-2">Description</th>
              <th className="p-2">Category</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {services.length > 0 ? (
              services.map((s, index) => (
                <tr key={s._id} className="border-b">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">
                    {s.image && (
                      <img src={s.image} className="h-10 rounded" />
                    )}
                  </td>
                  <td className="p-2">{s.title}</td>
                  <td className="p-2">{s.description}</td>
                  <td className="p-2">{s.category}</td>
                  <td className="p-2">
                    <button
                      onClick={() => dispatch(deleteService(s._id))}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No Services Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;