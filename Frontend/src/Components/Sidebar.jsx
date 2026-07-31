import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ role }) {
  const location = useLocation();

  const linkClass = (path) =>
    `block px-3 py-2 rounded hover:bg-indigo-600 ${
      location.pathname === path ? "bg-indigo-700 font-semibold" : ""
    }`;

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col justify-between">
      <div className="mt-5">
        <ul className="space-y-4"> {/* increased spacing */}
          {role === "admin" ? (
            <>
              <li><Link to="/admin/dashboard" className={linkClass("/admin/dashboard")}>📊 Dashboard</Link></li>
              <li><Link to="/admin/books" className={linkClass("/admin/books")}>📚 Manage Books</Link></li>
              <li><Link to="/admin/users" className={linkClass("/admin/users")}>👥 Manage Users</Link></li>
              <li><Link to="/admin/assign-list" className={linkClass("/admin/assign-list")}>📖 Assign List</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/user/dashboard" className={linkClass("/user/dashboard")}>📊 Dashboard</Link></li>
              <li><Link to="/user/my-books" className={linkClass("/user/my-books")}>📖 My Books</Link></li>
              <li><Link to="/user/profile" className={linkClass("/user/profile")}>👤 Profile</Link></li>
            </>
          )}
        </ul>
      </div>

  
    </aside>
  );
}
