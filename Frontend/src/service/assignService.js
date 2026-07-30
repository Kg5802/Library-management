import axios from "../axios";

export const assignBook = ({ userid, bid }) =>axios.post(`/admin/assign/${userid}/${bid}`);
export const getAssignList = () => axios.get("/admin/assign");
export const returnBook = (id) => axios.put(`/admin/assign/return/${id}`);
export const getAssignedBooksByUser = (userid) => axios.get(`/user/${userid}/assigned-books`);
