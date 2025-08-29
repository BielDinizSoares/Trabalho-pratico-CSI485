package com.example.engsoft.model;

import com.example.engsoft.model.Disciplina;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "tb_aluno")
@Data
public class Aluno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String matricula;

    @Column(nullable = false)
    private String name;

    @ManyToMany
    @JoinTable(
            name = "rl_aluno_disciplina",
            joinColumns = @JoinColumn(name = "id_aluno"),
            inverseJoinColumns = @JoinColumn(name = "id_disciplina")
    )
    private List<Disciplina> disciplinas;
}
