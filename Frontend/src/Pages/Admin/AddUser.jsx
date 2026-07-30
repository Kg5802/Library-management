import { useState } from "react";
import { addUser } from "../../service/userService";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const [form, setForm] = useState({
    uname: "",
    email: "",
    password: "",
    role: "user" 
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.uname || !form.email || !form.password) {
      alert("Please fill all fields.");
      return;
    }
    await addUser(form);
    alert("User added successfully!");
    navigate("/admin/users");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Add User
        </h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded px-3 py-2 mb-4"
          onChange={(e) => setForm({ ...form, uname: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded px-3 py-2 mb-4"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded px-3 py-2 mb-4"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Save
        </button>
      </form>
    </div>
  );
}
