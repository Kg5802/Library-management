import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-lg">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          📚 Library Management System
        </h1>
        <p className="text-gray-600 mb-8">
          Welcome to your digital library. Browse books, borrow, and manage your account easily.
        </p>

        <div className="flex flex-col space-y-4">
          <Link
            to="/login"
            className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Register
          </Link>
          <Link
            to="/user/books"
            className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
          >
            View Books
          </Link>
        </div>
      </div>
    </div>
  );
}
