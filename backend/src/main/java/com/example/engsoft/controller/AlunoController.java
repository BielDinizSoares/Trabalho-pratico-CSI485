package com.example.engsoft.controller;

import com.example.engsoft.model.Aluno;
import com.example.engsoft.repository.AlunoRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alunos")
public class AlunoController {

    private final AlunoRepo alunoRepository;

    public AlunoController(AlunoRepo alunoRepository) {
        this.alunoRepository = alunoRepository;
    }

    @GetMapping
    public List<Aluno> listar() {
        return alunoRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Aluno> buscarPorId(@PathVariable Long id) {
        return alunoRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Aluno criar(@RequestBody Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Aluno> atualizarParcial(@PathVariable Long id, @RequestBody Aluno alunoAtualizado) {
        return alunoRepository.findById(id)
                .map(aluno -> {
                    if (alunoAtualizado.getName() != null) {
                        aluno.setName(alunoAtualizado.getName());
                    }
                    if (alunoAtualizado.getMatricula() != null) {
                        aluno.setMatricula(alunoAtualizado.getMatricula());
                    }
                    if (alunoAtualizado.getDisciplinas() != null) {
                        aluno.setDisciplinas(alunoAtualizado.getDisciplinas());
                    }
                    return ResponseEntity.ok(alunoRepository.save(aluno));
                }).orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletar(@PathVariable Long id) {
        return alunoRepository.findById(id)
                .map(aluno -> {
                    alunoRepository.delete(aluno);
                    return ResponseEntity.noContent().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
