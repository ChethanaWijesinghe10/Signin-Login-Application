package com.chethanawijesinghe.backend.Service;

import com.chethanawijesinghe.backend.DTO.EmployeeDTO;
import com.chethanawijesinghe.backend.DTO.LoginDTO;
import com.chethanawijesinghe.backend.Response.LoginResponse;

public interface EmployeeService {
    String addEmployee(EmployeeDTO employeeDTO);

    LoginResponse loginEmployee(LoginDTO loginDTO);
}
