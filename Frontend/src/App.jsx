import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Admin/Dashboard";
import UserDashboard from "./Pages/Users/UserDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import BookList from "./Pages/Admin/BookList";
import AddBook from "./Pages/Admin/AddBook";
import UpdateBook from "./Pages/Admin/UpdateBook";
import UserList from "./Pages/Admin/UserList";
import AddUser from "./Pages/Admin/AddUser";
import AssignBook from "./Pages/Admin/AssignBook";
import AssignList from "./Pages/Admin/AssignList";

import ViewBooks from "./Pages/Users/ViewBooks";
import MyBooks from "./Pages/Users/MyBooks";
import Profile from "./Pages/Users/Profile";
import BookDetails from "./Pages/Users/BookDetails";
import UpdateUser from "./Pages/Admin/UpdateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route element={<ProtectedRoute role="admin" />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/books" element={<BookList />} />
          <Route path="/admin/add-book" element={<AddBook />} />
          <Route path="/admin/update-book/:id" element={<UpdateBook />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/add-user" element={<AddUser />} />
          <Route path="/admin/assign-book" element={<AssignBook />} />
          <Route path="/admin/assign-list" element={<AssignList />} />
          <Route path="/admin/update-user/:id" element={<UpdateUser />} />   
        </Route>

        {/* User Routes */}
        <Route element={<ProtectedRoute role="user" />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/books" element={<ViewBooks />} />
          <Route path="/user/my-books" element={<MyBooks />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/book/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
