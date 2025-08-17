package com.example.engsoft.controller;

import com.example.engsoft.model.Aluno;
import com.example.engsoft.model.Role;
import com.example.engsoft.repository.AlunoRepo;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/alunos")
public class AlunoController {
    private final AlunoRepo repository;

    public AlunoController(AlunoRepo repository) {
        this.repository = repository;
    }

    @PostMapping
    public Aluno criar(@RequestBody Aluno aluno) {
        aluno.setRole(Role.ALUNO);
        return repository.save(aluno);
    }

    @PutMapping("/{id}")
    public Aluno atualizar(@PathVariable Long id, @RequestBody Aluno novo) {
        return repository.findById(id)
                .map(a -> {
                    a.setNome(novo.getNome());
                    a.setEmail(novo.getEmail());
                    a.setSenha(novo.getSenha());
                    a.setMatricula(novo.getMatricula());
                    return repository.save(a);
                }).orElseThrow();
    }
}
