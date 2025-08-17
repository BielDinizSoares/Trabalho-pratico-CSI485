package com.example.engsoft.controller;

import com.example.engsoft.model.Disciplina;
import com.example.engsoft.repository.DisciplinaRepo;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/disciplinas")
public class DisciplinaController {
    private final DisciplinaRepo repository;

    public DisciplinaController(DisciplinaRepo repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Disciplina> listar() {
        return repository.findAll();
    }

    @PostMapping
    @PreAuthorize("hasRole('PROFESSOR') or hasRole('ADMINISTRADOR')")
    public Disciplina criar(@RequestBody Disciplina disciplina) {
        return repository.save(disciplina);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMINISTRADOR')")
    public void deletar(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
