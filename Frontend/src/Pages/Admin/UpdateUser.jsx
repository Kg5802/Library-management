import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../../service/userService";
import toast from "react-hot-toast";

export default function UpdateUser() {
  const { id } = useParams(); // user id from route
  const navigate = useNavigate();
  const [form, setForm] = useState({
    uname: "",
    email: "",
    password: "",
    role: "user"
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const { data } = await getUserById(id);
      setForm(data);
    } catch (error) {
      toast.error("Failed to load user details.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.uname || !form.email || !form.password) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      const loadingToast = toast.loading("Updating user...");
      await updateUser(id, form);
      toast.success("User updated successfully!", { id: loadingToast });
      navigate("/admin/users");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update user.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Update User
        </h2>
        <input
          type="text"
          value={form.uname}
          placeholder="Name"
          className="w-full border rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setForm({ ...form, uname: e.target.value })}
        />
        <input
          type="email"
          value={form.email}
          placeholder="Email"
          className="w-full border rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          value={form.password}
          placeholder="Password"
          className="w-full border rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <select
          value={form.role}
          className="w-full border rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
