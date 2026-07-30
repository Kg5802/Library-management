package com.example.lib_man.service;

import com.example.lib_man.model.Users;
import com.example.lib_man.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository usersRepository;

    public List<Users> getAllUsers() {
        return usersRepository.findByRole("user");
    }

    public Users getUserById(int id) {
        return usersRepository.findById(id).orElse(null);
    }


    public Users addUser(Users user) {
        return usersRepository.save(user);
    }

    public Users updateUser(int userid, Users user) {
        Users existing = usersRepository.findById(userid).orElseThrow();
        existing.setUname(user.getUname());
        existing.setEmail(user.getEmail());
        existing.setPassword(user.getPassword());
        existing.setRole(user.getRole());
        return usersRepository.save(existing);
    }

    public void deleteUser(int id) {
        usersRepository.deleteById(id);
    }

    public Users login(String email, String password) {
        Users user = usersRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
