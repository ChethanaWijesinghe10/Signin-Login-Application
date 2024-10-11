package com.chethanawijesinghe.backend.DTO;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class EmployeeDTO {
    private   Integer employeeId;
    private   String employeeName;
    private String email;
    private   String password;
}

