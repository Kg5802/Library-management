import { useEffect, useState } from "react";
import { getBooks } from "../../service/bookService";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function ViewBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const { data } = await getBooks();
      setBooks(data);
    } catch (error) {
      toast.error("Failed to fetch books.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">Available Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <Link
            key={book.bid}
            to={`/user/book/${book.bid}`}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            onClick={() => {
              toast.success(`Opening ${book.bname}...`)
            }}
          >
            <h2 className="text-xl font-semibold text-indigo-600">{book.bname}</h2>
            <p className="text-gray-600 mt-2">Price: ₹{book.price}</p>
          </Link>
        ))}

        {/* Empty state */}
        {books.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-6">
            No books available.
          </div>
        )}
      </div>
    </div>
  );
}
