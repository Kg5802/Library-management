import axios from "../axios";

export const getUsers = () => axios.get("/user");
export const getUserById = (id) => axios.get(`/user/${id}`);
export const addUser = (user) => {
    axios.post("admin/user", user);
}
export const updateUser = (id, user) => axios.put(`/admin/user/${id}`, user);
export const deleteUser = (id) => axios.delete(`/admin/user/${id}`);

export const loginUser = (credentials) => axios.post("/user/login", credentials);
    
