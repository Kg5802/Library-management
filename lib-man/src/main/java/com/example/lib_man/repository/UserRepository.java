package com.example.lib_man.repository;

import com.example.lib_man.model.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserRepository extends CrudRepository<Users,Integer> {
    Users findByEmail(String email);
    List<Users> findByRole(String role);
}
