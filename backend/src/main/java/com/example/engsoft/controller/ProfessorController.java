package com.example.engsoft.controller;

import com.example.engsoft.model.Professor;
import com.example.engsoft.repository.ProfessorRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/professores")
public class ProfessorController {

    private final ProfessorRepo professorRepository;

    public ProfessorController(ProfessorRepo professorRepository) {
        this.professorRepository = professorRepository;
    }

    @GetMapping
    public List<Professor> listar() {
        return professorRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Professor> buscarPorId(@PathVariable Long id) {
        return professorRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Professor criar(@RequestBody Professor professor) {
        return professorRepository.save(professor);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Professor> atualizarParcial(@PathVariable Long id, @RequestBody Professor professorAtualizado) {
        return professorRepository.findById(id)
                .map(professor -> {
                    if (professorAtualizado.getName() != null) {
                        professor.setName(professorAtualizado.getName());
                    }
                    if (professorAtualizado.getEmail() != null) {
                        professor.setEmail(professorAtualizado.getEmail());
                    }
                    if (professorAtualizado.getDepartamento() != null) {
                        professor.setDepartamento(professorAtualizado.getDepartamento());
                    }
                    return ResponseEntity.ok(professorRepository.save(professor));
                }).orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletar(@PathVariable Long id) {
        return professorRepository.findById(id)
                .map(professor -> {
                    professorRepository.delete(professor);
                    return ResponseEntity.noContent().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
