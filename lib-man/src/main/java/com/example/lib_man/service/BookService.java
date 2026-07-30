
package com.example.lib_man.service;

import com.example.lib_man.model.Book;
import com.example.lib_man.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository repository;

    public List<Book> getAllBooks(){
        return (List<Book>)repository.findAll();
    }

    public Book addBooks(Book book){
        return repository.save(book);
    }

    public Book deleteBooks(int bid){
         Book book = repository.findById(bid).orElse(new Book());
         repository.deleteById(bid);
         return book;
    }
}
