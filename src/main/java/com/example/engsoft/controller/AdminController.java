package com.example.engsoft.controller;

import com.example.engsoft.model.Admin;
import com.example.engsoft.model.Role;
import com.example.engsoft.repository.AdminRepo;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admins")
public class AdminController {
    private final AdminRepo repository;

    public AdminController(AdminRepo repository) {
        this.repository = repository;
    }

    @PostMapping
    public Admin criar(@RequestBody Admin admin) {
        admin.setRole(Role.ADMINISTRADOR);
        return repository.save(admin);
    }

    @PutMapping("/{id}")
    public Admin atualizar(@PathVariable Long id, @RequestBody Admin novo) {
        return repository.findById(id)
                .map(a -> {
                    a.setNome(novo.getNome());
                    a.setEmail(novo.getEmail());
                    a.setSenha(novo.getSenha());
                    return repository.save(a);
                }).orElseThrow();
    }
}
