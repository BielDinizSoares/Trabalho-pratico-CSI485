package com.example.engsoft.controller;

import com.example.engsoft.model.Usuario;
import com.example.engsoft.repository.UsuarioRepo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    private final UsuarioRepo repository;

    public UsuarioController(UsuarioRepo repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Usuario> listar() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Usuario buscar(@PathVariable Long id) {
        return repository.findById(id).orElseThrow();
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
