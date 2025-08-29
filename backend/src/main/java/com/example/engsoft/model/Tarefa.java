package com.example.engsoft.model;

import com.example.engsoft.model.Disciplina;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "tb_tarefa")
@Data
public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descricao;

    @Column(nullable = false)
    private String titulo;

    @ManyToOne
    @JoinColumn(name = "id_disciplina", nullable = false)
    private Disciplina disciplina;

}
