import { useEffect, useState } from "react";
import { getAssignList, returnBook } from "../../service/assignService";
import { Link, useNavigate } from "react-router-dom";

export default function AssignList() {
  const [assignments, setAssignments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    const { data } = await getAssignList();
    setAssignments(data);
  };

  const handleReturn = async (id) => {
    await returnBook(id);
    fetchAssignments();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">📖 Assigned Books</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Book</th>
              <th className="px-4 py-2">Issue Date</th>
              <th className="px-4 py-2">Return Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a) => (
              <tr key={a.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-center">{a.users?.uname}</td>
                <td className="px-4 py-2 text-center">{a.book?.bname}</td>
                <td className="px-4 py-2 text-center">{a.issueDate}</td>
                <td className="px-4 py-2 text-center">{a.returnDate || "-"}</td>
                <td className="px-4 py-2 text-center">{a.status}</td>
                <td className="px-4 py-2 text-center">
                  {a.status !== "Returned" && (
                    <button
                      onClick={() => handleReturn(a.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      Mark Returned
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {assignments.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No assignments found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

      <div className="flex space-x-4 mt-6">
        <Link
          to="/admin/assign-book"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          ➕ Assign New Book
        </Link>
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
}
