package com.example.engsoft.model;

import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class Professor extends Usuario{
    private String departamento;
}
