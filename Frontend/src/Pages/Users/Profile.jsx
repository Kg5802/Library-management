import { useState } from "react";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [form, setForm] = useState(user);

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(form));
    alert("Profile updated locally.");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">My Profile</h2>
        <input type="text" value={form.uname} className="w-full border rounded px-3 py-2 mb-4"
          onChange={(e) => setForm({ ...form, uname: e.target.value })}/>
        <input type="email" value={form.email} className="w-full border rounded px-3 py-2 mb-4"
          onChange={(e) => setForm({ ...form, email: e.target.value })}/>
        <input type="password" value={form.password} className="w-full border rounded px-3 py-2 mb-4"
          onChange={(e) => setForm({ ...form, password: e.target.value })}/>
        <button onClick={handleSave} className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Save</button>
      </div>
    </div>
  );
}
