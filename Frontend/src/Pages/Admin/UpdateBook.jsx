import { useState, useEffect } from "react";
import { getBooks, updateBook } from "../../service/bookService";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ bid: "", bname: "", price: "" });

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    const { data } = await getBooks();
    const book = data.find((b) => b.bid === parseInt(id));
    if (book) setForm(book);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBook(id, form);
    navigate("/admin/books");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">Update Book</h2>
        <input
          type="number"
          value={form.bid}
          placeholder="Book ID"
          className="w-full border rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setForm({ ...form, bid: e.target.value })}
          disabled
        />
        <input
          type="text"
          value={form.bname}
          placeholder="Book Name"
          className="w-full border rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setForm({ ...form, bname: e.target.value })}
        />
        <input
          type="number"
          value={form.price}
          placeholder="Price"
          className="w-full border rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Update
        </button>
      </form>
    </div>
  );
}
