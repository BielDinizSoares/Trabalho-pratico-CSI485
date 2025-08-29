package com.example.engsoft.model;

import com.example.engsoft.model.Professor;
import com.example.engsoft.model.Tarefa;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "tb_disciplina")
@Data
public class Disciplina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Integer cargaHoraria;

    @ManyToOne
    @JoinColumn(name = "id_professor")
    private Professor professor;

    @OneToMany(mappedBy = "disciplina", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Tarefa> tarefas;

    @ManyToMany(mappedBy = "disciplinas")
    private List<Aluno> alunos;
}
