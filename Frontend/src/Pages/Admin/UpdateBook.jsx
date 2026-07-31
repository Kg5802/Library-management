import { useState, useEffect } from "react";
import { getBooks, updateBook } from "../../service/bookService";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ bid: "", bname: "", price: "" });

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const { data } = await getBooks();
      const book = data.find((b) => b.bid === parseInt(id));
      if (book) setForm(book);
    } catch (error) {
      toast.error("Failed to load book details.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.bname || !form.price) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      const loadingToast = toast.loading("Updating book...");
      await updateBook(id, form);
      toast.success("Book updated successfully!", { id: loadingToast });
      navigate("/admin/books");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update book.");
    }
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
          onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })}
        />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Update
        </button>
      </form>
    </div>
  );
}
