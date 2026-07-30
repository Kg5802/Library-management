package com.example.lib_man.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "assign")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Assign {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "assign_seq")
    @SequenceGenerator(
            name = "assign_seq",
            sequenceName = "assign_seq",
            allocationSize = 1
    )
    private int id;

    @ManyToOne
    @JoinColumn(name = "userid", referencedColumnName = "userid")
    private Users users;

    @ManyToOne
    @JoinColumn(name = "bid", referencedColumnName = "bid")
    private Book book;

    private LocalDate issueDate;

    private LocalDate returnDate;

    private String status;
}