import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBooks } from "../../service/bookService";
import { assignBook } from "../../service/assignService";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const user = JSON.parse(localStorage.getItem("user")); 

  useEffect(() => { fetchBook(); }, []);

  const fetchBook = async () => {
    const { data } = await getBooks();
    const found = data.find((b) => b.bid === parseInt(id));
    setBook(found);
  };

  const handleBorrow = async () => {
    if (!user) {
      alert("Please login first to borrow books.");
      navigate("/login");
      return;
    }
    await assignBook({ userid: user.userid, bid: book.bid });
    alert(`Book "${book.bname}" assigned to ${user.uname}`);
    navigate("/user/my-books");
  };

  if (!book) return <div className="p-6">Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">{book.bname}</h2>
        <p className="text-gray-700 mb-2">Book ID: {book.bid}</p>
        <p className="text-gray-700 mb-2">Price: ₹{book.price}</p>
        <button
          onClick={handleBorrow}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Borrow
        </button>
      </div>
    </div>
  );
}
