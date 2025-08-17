package com.example.engsoft.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Tarefa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String descricao;

    @ManyToOne
    private Disciplina disciplina;
}
