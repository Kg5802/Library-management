import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem("user");
    sessionStorage.clear();

    navigate("/");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-700">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          🚪 Logout
        </button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/admin/books"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-indigo-600">📚 Manage Books</h2>
          <p className="text-gray-600 mt-2">Add, update, or delete books.</p>
        </Link>
        <Link
          to="/admin/users"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-indigo-600">👤 Manage Users</h2>
          <p className="text-gray-600 mt-2">View and manage registered users.</p>
        </Link>
        <Link
          to="/admin/assign-list"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-indigo-600">📖 Assign List</h2>
          <p className="text-gray-600 mt-2">View all assigned books.</p>
        </Link>
      </div>
    </div>
  );
}
