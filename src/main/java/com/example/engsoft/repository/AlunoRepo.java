package com.example.engsoft.repository;

import com.example.engsoft.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepo extends JpaRepository<Aluno, Long> {
}
