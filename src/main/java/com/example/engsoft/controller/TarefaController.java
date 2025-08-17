package com.example.engsoft.controller;

import com.example.engsoft.model.Tarefa;
import com.example.engsoft.repository.TarefaRepo;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tarefas")
public class TarefaController {
    private final TarefaRepo repository;

    public TarefaController(TarefaRepo repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Tarefa> listar() {
        return repository.findAll();
    }

    @PostMapping
    @PreAuthorize("hasRole('PROFESSOR') or hasRole('ADMINISTRADOR')")
    public Tarefa criar(@RequestBody Tarefa tarefa) {
        return repository.save(tarefa);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMINISTRADOR')")
    public void deletar(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
