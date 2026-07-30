package com.example.lib_man.repository;

import com.example.lib_man.model.Assign;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssignRepository extends JpaRepository<Assign, Integer> {
    List<Assign> findByUsersUserid(int userid);

}