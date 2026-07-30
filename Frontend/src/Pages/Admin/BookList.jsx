import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../../service/bookService";
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

  const handleDelete = async (id) => {
    if (window.confirm("Delete this book?")) {
      await deleteBook(id);
      fetchBooks();
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">📚 Book List</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.bid} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{book.bid}</td>
                <td className="px-4 py-2">{book.bname}</td>
                <td className="px-4 py-2">₹{book.price}</td>
                <td className="px-4 py-2 space-x-2">
            
                  <button
                    onClick={() => handleDelete(book.bid)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
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
          onClick={() => navigate("/admin/dashboard")} // go back to previous page
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
}
