import { useState } from "react";
import { addBook } from "../../service/bookService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AddBook() {
  const [book, setBook] = useState({ bname: "", price: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!book.bname || !book.price) {
      toast.error("Please fill all fields.");
      return;
    }
    try {
      await addBook(book);
      toast.success("Book added successfully!");
      navigate("/admin/books");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add book.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">➕ Add Book</h2>
        <input
          type="text"
          placeholder="Book Name"
          className="w-full border rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setBook({ ...book, bname: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full border rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setBook({ ...book, price: parseFloat(e.target.value) })}
        />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Add Book
        </button>
      </form>
    </div>
  );
}
