package com.chethanawijesinghe.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "employee")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "employee_id",length = 145)
  private   Integer employeeId;

    @Column(name = "employee_name",length = 145)
    private   String employeeName;


    @Column(name = "employee_email",length = 145)
   private String email;
    @Column(name = "password",length = 145)
  private   String password;
}
