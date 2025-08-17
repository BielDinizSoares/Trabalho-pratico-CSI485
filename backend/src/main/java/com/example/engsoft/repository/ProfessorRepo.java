package com.example.engsoft.repository;

import com.example.engsoft.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessorRepo extends JpaRepository<Professor, Long> {
}
