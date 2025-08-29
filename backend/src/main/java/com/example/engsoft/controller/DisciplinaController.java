package com.example.engsoft.controller;

import com.example.engsoft.model.Disciplina;
import com.example.engsoft.repository.DisciplinaRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/disciplinas")
public class DisciplinaController {

    private final DisciplinaRepo disciplinaRepository;

    public DisciplinaController(DisciplinaRepo disciplinaRepository) {
        this.disciplinaRepository = disciplinaRepository;
    }

    @GetMapping
    public List<Disciplina> listar() {
        return disciplinaRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Disciplina> buscarPorId(@PathVariable Long id) {
        return disciplinaRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Disciplina criar(@RequestBody Disciplina disciplina) {
        return disciplinaRepository.save(disciplina);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Disciplina> atualizarParcial(@PathVariable Long id, @RequestBody Disciplina disciplinaAtualizada) {
        return disciplinaRepository.findById(id)
                .map(disciplina -> {
                    if (disciplinaAtualizada.getName() != null) {
                        disciplina.setName(disciplinaAtualizada.getName());
                    }
                    if (disciplinaAtualizada.getCargaHoraria() != null) {
                        disciplina.setCargaHoraria(disciplinaAtualizada.getCargaHoraria());
                    }
                    if (disciplinaAtualizada.getProfessor() != null) {
                        disciplina.setProfessor(disciplinaAtualizada.getProfessor());
                    }
                    if (disciplinaAtualizada.getAlunos() != null) {
                        disciplina.setAlunos(disciplinaAtualizada.getAlunos());
                    }
                    return ResponseEntity.ok(disciplinaRepository.save(disciplina));
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletar(@PathVariable Long id) {
        return disciplinaRepository.findById(id)
                .map(disciplina -> {
                    disciplinaRepository.delete(disciplina);
                    return ResponseEntity.noContent().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
