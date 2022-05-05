package com.github.szymonkwak.currencying.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;
    private String email;
    private Double plnBalance = 0.0;
    private Double usdBalance = 0.0;
    private Double eurBalance = 0.0;
    private Double chfBalance = 0.0;
}
