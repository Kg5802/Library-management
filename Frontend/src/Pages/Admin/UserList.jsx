import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../service/userService"; // backend service
import { Link, useNavigate } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data } = await getUsers(); // call backend
    setUsers(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this user?")) {
      await deleteUser(id); // call backend delete
      fetchUsers(); // refresh list
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">👥 User List</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.userid} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-center">{u.userid}</td>
                <td className="px-4 py-2 text-center">{u.uname}</td>
                <td className="px-4 py-2 text-center">{u.email}</td>
                <td className="px-4 py-2 text-center space-x-2">
                  <Link
                    to={`/admin/update-user/${u.userid}`}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(u.userid)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

      <div className="flex space-x-4 mt-6">
        <Link
          to="/admin/add-user"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          ➕ Add New User
        </Link>
        <button
          onClick={() => navigate("/admin/Dashboard")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
}
