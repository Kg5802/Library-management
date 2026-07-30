package com.example.lib_man.service;

import com.example.lib_man.model.Assign;
import com.example.lib_man.model.Book;
import com.example.lib_man.model.Users;
import com.example.lib_man.repository.AssignRepository;
import com.example.lib_man.repository.BookRepository;
import com.example.lib_man.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AssignService {

    @Autowired
    private AssignRepository assignRepository;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private UserRepository userRepository;

    public Assign assignBook(int userid, int bid){

        Users user = userRepository.findById(userid).orElse(null);
        Book book = bookRepository.findById(bid).orElse(null);

        if(user == null){
            throw new RuntimeException("User not found");
        }
        if (book == null) {
            throw new RuntimeException("Book not found");
        }

        Assign assign = new Assign();
        assign.setUsers(user);
        assign.setBook(book);
        assign.setIssueDate(LocalDate.now());
        assign.setReturnDate(LocalDate.now().plusDays(15));
        assign.setStatus("ISSUED");

        return assignRepository.save(assign);
    }

    public List<Assign> getAllAssignedBooks() {
        return (List<Assign>) assignRepository.findAll();
    }

    public List<Assign> getAssignedBooksByUser(int userid) {
        return assignRepository.findByUsersUserid(userid);
    }


    public Assign returnBook(int assignId) {
        Assign assign = assignRepository.findById(assignId).orElse(null);
        if (assign == null) {
            throw new RuntimeException("Assignment not found");
        }
        assign.setStatus("RETURNED");
        return assignRepository.save(assign);
    }


}

