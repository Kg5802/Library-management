package com.example.lib_man.controller;

import com.example.lib_man.model.Assign;
import com.example.lib_man.model.Book;
import com.example.lib_man.model.Users;
import com.example.lib_man.service.AssignService;
import com.example.lib_man.service.BookService;
import com.example.lib_man.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("*") // adjust for frontend port
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BookService bookService;

    @Autowired
    private AssignService assignService;


    @GetMapping
    public ResponseEntity<List<Users>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }


    @GetMapping("/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable int id) {
        Users user = userService.getUserById(id);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }


    @PostMapping("/login")
    public ResponseEntity<Users> login(@RequestBody Users loginRequest) {
        Users user = userService.login(loginRequest.getEmail(), loginRequest.getPassword());
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok(user);
    }


    @GetMapping("/books")
    public ResponseEntity<List<Book>> getAllBooks() {
        return ResponseEntity.ok(bookService.getAllBooks());
    }

    
    @GetMapping("/{userid}/assigned-books")
    public ResponseEntity<List<Assign>> getAssignedBooks(@PathVariable int userid) {
        return ResponseEntity.ok(assignService.getAssignedBooksByUser(userid));
    }
}
