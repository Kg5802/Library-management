import axios from "../axios";

export const getBooks = () => axios.get("admin/book");
export const addBook = (book) => axios.post("admin/book", book);
export const updateBook = (id, book) => axios.put(`admin/book/${id}`, book);
export const deleteBook = (id) => axios.delete(`admin/book/${id}`);
