package com.example.engsoft.repository;

import com.example.engsoft.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarefaRepo extends JpaRepository<Tarefa, Long> {
}
