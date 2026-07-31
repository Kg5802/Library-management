import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.clear();
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-600 text-white px-6 py-3 flex justify-between items-center">
      {/* App Title */}
      <h1 className="text-xl font-bold">📚 Library System</h1>

      {/* User Info + Logout */}
      <div className="flex items-center space-x-4">
        {user && (
          <div className="flex flex-col text-right">
            <span className="font-semibold">{user.uname}</span>
            <span className="text-sm text-gray-200">{user.role}</span>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
