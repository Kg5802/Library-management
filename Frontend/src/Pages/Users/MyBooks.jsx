import { useEffect, useState } from "react";
import { getAssignedBooksByUser } from "../../service/assignService";
import { useNavigate } from "react-router-dom";

export default function MyBooks() {
  const [assignments, setAssignments] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    const { data } = await getAssignedBooksByUser(user.userid);
    setAssignments(data);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
        📖 My Books
      </h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="table-auto w-full border-collapse text-center">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-4 py-2 text-center">Book</th>
              <th className="px-4 py-2 text-center">Issue Date</th>
              <th className="px-4 py-2 text-center">Return Date</th>
              <th className="px-4 py-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a) => (
              <tr key={a.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-center">{a.book?.bname}</td>
                <td className="px-4 py-2 text-center">{a.issueDate}</td>
                <td className="px-4 py-2 text-center">{a.returnDate || "-"}</td>
                <td className="px-4 py-2 text-center">{a.status}</td>
              </tr>
            ))}
            {assignments.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No books borrowed.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/user/dashboard")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
}
