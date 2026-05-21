import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProducts } from "../../features/product/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products = [] } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-xl font-bold text-green-600 mb-4">
        Products List
      </h2>

      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-2">SR.NO</th>
              <th className="p-2">Name</th>
              <th className="p-2">Category</th>
              <th className="p-2">Image</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.length > 0 ? (
              products.map((p, index) => (
                <tr key={p._id} className="border-b">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{p.name}</td>
                  <td className="p-2">{p.category?.name}</td>

                  <td className="p-2">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt="product"
                        className="h-10 w-10 object-cover rounded"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>

                  <td className="p-2">
                    <button
                      onClick={() => dispatch(deleteProduct(p._id))}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No Products Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;