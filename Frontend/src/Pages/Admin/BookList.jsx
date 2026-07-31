import { useEffect, useState } from "react";
import { getBooks } from "../../service/bookService";
import { Link, useNavigate } from "react-router-dom";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const { data } = await getBooks();
    setBooks(data);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">📚 Book List</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="table-auto w-full border-collapse text-center">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-4 py-2 text-center">ID</th>
              <th className="px-4 py-2 text-center">Name</th>
              <th className="px-4 py-2 text-center">Price</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.bid} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-center">{book.bid}</td>
                <td className="px-4 py-2 text-center">{book.bname}</td>
                <td className="px-4 py-2 text-center">₹{book.price}</td>
                <td className="px-4 py-2 text-center space-x-2">
                  {/* ✅ Update button */}
                  <Link
                    to={`/admin/update-book/${book.bid}`}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
            {books.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No books available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex space-x-4 mt-6">
        <Link
          to="/admin/add-book"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          ➕ Add New Book
        </Link>
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
}
