
package com.example.lib_man.service;

import com.example.lib_man.model.Book;
import com.example.lib_man.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository repository;

    public List<Book> getAllBooks(){
        return (List<Book>) repository.findAll();
    }

    public Book addBooks(Book book){
        return repository.save(book);
    }

    public Book updateBook(int bid, Book bookDetails) {
        Optional<Book> optionalBook = repository.findById(bid);

        if (optionalBook.isPresent()) {
            Book existingBook = optionalBook.get();
            existingBook.setBname(bookDetails.getBname());
            existingBook.setPrice(bookDetails.getPrice());
            return repository.save(existingBook);
        } else {
            throw new RuntimeException("Book not found with id: " + bid);
        }
    }

    public Book deleteBooks(int bid){
        Book book = repository.findById(bid).orElse(null);
        if (book != null) {
            repository.deleteById(bid);
        }
        return book;
    }
}

