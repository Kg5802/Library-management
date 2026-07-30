import { useState } from "react";
import { addUser } from "../../service/userService";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    uname: "",
    email: "",
    password: "",
    role: "user" // default role
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.uname || !form.email || !form.password) {
      alert("Please fill all fields.");
      return;
    }
    await addUser(form);
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="bg-white shadow-lg rounded-lg p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Register
        </h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setForm({ ...form, uname: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        {/* Role dropdown */}
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
          Register
        </button>

        {/* Login link */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
