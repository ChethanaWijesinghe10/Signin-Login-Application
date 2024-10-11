package com.chethanawijesinghe.backend.Controller;

import com.chethanawijesinghe.backend.DTO.EmployeeDTO;
import com.chethanawijesinghe.backend.DTO.LoginDTO;
import com.chethanawijesinghe.backend.Repo.EmployeeRepo;
import com.chethanawijesinghe.backend.Response.LoginResponse;
import com.chethanawijesinghe.backend.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(path = "employee")
public class EmployeeController {
@Autowired
    EmployeeService employeeService;


    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody EmployeeDTO employeeDTO) {
        String id = employeeService.addEmployee(employeeDTO);
        return id;
    }


    @PostMapping(path = "/login")
    public ResponseEntity loginEmployee (LoginDTO loginDTO){
        LoginResponse loginResponse=employeeService.loginEmployee(loginDTO);
        return  ResponseEntity.ok(loginResponse);
    }
}