import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getAllContacts } from "../../features/contact/contactSlice";

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts = [] } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        Contact Messages
      </h2>

      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3">SR.NO</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Message</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {contacts.length > 0 ? (
              contacts.map((c, index) => (
                <tr key={c._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>

                  <td className="p-3 font-medium">{c.name}</td>

                  <td className="p-3 text-blue-600">
                    {c.email}
                  </td>

                  <td className="p-3">{c.phone || "-"}</td>

                  <td className="p-3 max-w-xs truncate">
                    {c.message}
                  </td>

                  <td className="p-3 text-sm text-gray-500">
                    {new Date(c.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-3">
                    <button
                      onClick={() => dispatch(deleteContact(c._id))}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-5 text-gray-500">
                  No Messages Found 📭
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;