import { useState, useEffect } from "react";
import { assignBook } from "../../service/assignService";
import { getUsers } from "../../service/userService";
import { getBooks } from "../../service/bookService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AssignBook() {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ userid: "", bid: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data: userData } = await getUsers();
      const { data: bookData } = await getBooks();
      setUsers(userData);
      setBooks(bookData);
    } catch (error) {
      toast.error("Failed to load users or books.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.userid || !form.bid) {
      toast.error("Please select both user and book.");
      return;
    }

    try {
      const loadingToast = toast.loading("Assigning book...");
      await assignBook(form); // sends POST /assign/{userid}/{bid}
      toast.success("Book assigned successfully!", { id: loadingToast });
      navigate("/admin/assign-list");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to assign book.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Assign Book
        </h2>
        <select
          className="w-full border rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-500"
          value={form.userid}
          onChange={(e) => setForm({ ...form, userid: e.target.value })}
        >
          <option value="">Select User</option>
          {users.map((u) => (
            <option key={u.userid} value={u.userid}>
              {u.uname}
            </option>
          ))}
        </select>
        <select
          className="w-full border rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-500"
          value={form.bid}
          onChange={(e) => setForm({ ...form, bid: e.target.value })}
        >
          <option value="">Select Book</option>
          {books.map((b) => (
            <option key={b.bid} value={b.bid}>
              {b.bname}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Assign
        </button>
      </form>
    </div>
  );
}
