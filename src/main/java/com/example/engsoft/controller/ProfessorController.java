package com.example.engsoft.controller;

import com.example.engsoft.model.Professor;
import com.example.engsoft.model.Role;
import com.example.engsoft.repository.ProfessorRepo;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/professores")
public class ProfessorController {
    private final ProfessorRepo repository;

    public ProfessorController(ProfessorRepo repository) {
        this.repository = repository;
    }

    @PostMapping
    public Professor criar(@RequestBody Professor professor) {
        professor.setRole(Role.PROFESSOR);
        return repository.save(professor);
    }

    @PutMapping("/{id}")
    public Professor atualizar(@PathVariable Long id, @RequestBody Professor novo) {
        return repository.findById(id)
                .map(p -> {
                    p.setNome(novo.getNome());
                    p.setEmail(novo.getEmail());
                    p.setSenha(novo.getSenha());
                    p.setDepartamento(novo.getDepartamento());
                    return repository.save(p);
                }).orElseThrow();
    }
}
