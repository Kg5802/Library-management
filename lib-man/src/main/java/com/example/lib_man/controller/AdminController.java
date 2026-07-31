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
@CrossOrigin("*")
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private BookService bservice;

    @Autowired
    private UserService userService;

    @Autowired
    private AssignService assignService;

    // ------------------- Book APIs -------------------
    @GetMapping("/book")
    public ResponseEntity<List<Book>> getBook() {
        return ResponseEntity.ok(bservice.getAllBooks());
    }

    @PostMapping("/book")
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        Book savedBook = bservice.addBooks(book);
        return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
    }

    @PutMapping("/book/{bid}")
    public ResponseEntity<Book> updateBook(@PathVariable int bid, @RequestBody Book book) {
        Book updatedBook = bservice.updateBook(bid, book);
        return new ResponseEntity<>(updatedBook, HttpStatus.OK);
    }


    @DeleteMapping("/book/{bid}")
    public ResponseEntity<String> deleteBook(@PathVariable int bid) {
        bservice.deleteBooks(bid);
        return ResponseEntity.ok("Book deleted successfully");
    }

    // ------------------- User APIs -------------------
    @GetMapping("/user")
    public ResponseEntity<List<Users>> getUser() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @PostMapping("/user")
    public ResponseEntity<Users> addUser(@RequestBody Users user) {

        Users savedUser = userService.addUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @PutMapping("/user/{userid}")
    public ResponseEntity<Users> updateUser(@PathVariable int userid, @RequestBody Users user) {
        Users updatedUser = userService.updateUser(userid, user);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/user/{userid}")
    public ResponseEntity<String> deleteUser(@PathVariable int userid) {
        userService.deleteUser(userid);
        return ResponseEntity.ok("User deleted successfully");
    }

    // ------------------- Assign APIs -------------------
    @PostMapping("/assign/{userid}/{bid}")
    public ResponseEntity<Assign> assignBook(@PathVariable int userid, @PathVariable int bid) {
        Assign assign = assignService.assignBook(userid, bid);
        return new ResponseEntity<>(assign, HttpStatus.CREATED);
    }

    @GetMapping("/assign")
    public ResponseEntity<List<Assign>> getAllAssignedBooks() {
        return ResponseEntity.ok(assignService.getAllAssignedBooks());
    }

    @GetMapping("/assign/user/{userid}")
    public ResponseEntity<List<Assign>> getAssignedBooksByUser(@PathVariable int userid) {
        return ResponseEntity.ok(assignService.getAssignedBooksByUser(userid));
    }

    @PutMapping("/assign/return/{assignId}")
    public ResponseEntity<Assign> returnBook(@PathVariable int assignId) {
        Assign assign = assignService.returnBook(assignId);
        return ResponseEntity.ok(assign);
    }
}
