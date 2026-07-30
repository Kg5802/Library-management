package com.example.lib_man.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "book_seq")
    @SequenceGenerator(name = "book_seq", sequenceName = "BOOK_SEQ", allocationSize = 1)
    @Column(name = "bid")
    private int bid;

    @Column(nullable = false)
    private String bname;

    @Column(nullable = false)
    private int price;
}
