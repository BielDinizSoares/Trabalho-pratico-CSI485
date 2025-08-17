package com.example.engsoft.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Disciplina {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @ManyToOne
    private Professor professor;
}
