import { Link } from "react-router-dom";

export default function UserDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-700">User Dashboard</h1>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/user/books"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-indigo-600">📚 View Books</h2>
          <p className="text-gray-600 mt-2">Browse available books.</p>
        </Link>

        <Link
          to="/user/my-books"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-indigo-600">📖 My Books</h2>
          <p className="text-gray-600 mt-2">See books you’ve borrowed.</p>
        </Link>

        <Link
          to="/user/profile"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-indigo-600">👤 Profile</h2>
          <p className="text-gray-600 mt-2">Manage your account details.</p>
        </Link>
      </div>
    </div>
  );
}
