package com.example.engsoft.controller;

import com.example.engsoft.model.Tarefa;
import com.example.engsoft.repository.TarefaRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tarefas")
public class TarefaController {

    private final TarefaRepo tarefaRepository;

    public TarefaController(TarefaRepo tarefaRepository) {
        this.tarefaRepository = tarefaRepository;
    }

    @GetMapping
    public List<Tarefa> listar() {
        return tarefaRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tarefa> buscarPorId(@PathVariable Long id) {
        return tarefaRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Tarefa criar(@RequestBody Tarefa tarefa) {
        return tarefaRepository.save(tarefa);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Tarefa> atualizarParcial(@PathVariable Long id, @RequestBody Tarefa tarefaAtualizada) {
        return tarefaRepository.findById(id)
                .map(tarefa -> {
                    if (tarefaAtualizada.getTitulo() != null) {
                        tarefa.setTitulo(tarefaAtualizada.getTitulo());
                    }
                    if (tarefaAtualizada.getDescricao() != null) {
                        tarefa.setDescricao(tarefaAtualizada.getDescricao());
                    }
                    if (tarefaAtualizada.getDisciplina() != null) {
                        tarefa.setDisciplina(tarefaAtualizada.getDisciplina());
                    }
                    return ResponseEntity.ok(tarefaRepository.save(tarefa));
                }).orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletar(@PathVariable Long id) {
        return tarefaRepository.findById(id)
                .map(tarefa -> {
                    tarefaRepository.delete(tarefa);
                    return ResponseEntity.noContent().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
