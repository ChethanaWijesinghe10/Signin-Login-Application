package com.chethanawijesinghe.backend.Service;

import com.chethanawijesinghe.backend.DTO.EmployeeDTO;
import com.chethanawijesinghe.backend.DTO.LoginDTO;
import com.chethanawijesinghe.backend.Repo.EmployeeRepo;
import com.chethanawijesinghe.backend.Response.LoginResponse;
import com.chethanawijesinghe.backend.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeServiceIMPL implements EmployeeService{
    @Autowired
    EmployeeRepo employeeRepo;

    @Autowired
    PasswordEncoder passwordEncoder;
    @Override
    public String addEmployee(EmployeeDTO employeeDTO) {

        Employee employee=new Employee(
           employeeDTO.getEmployeeId(),
           employeeDTO.getEmployeeName(),
           employeeDTO.getEmail(),
           this.passwordEncoder.encode(employeeDTO.getPassword())
        );
        employeeRepo.save(employee);
        return  employee.getEmployeeName();
    }

   /* @Override
    public LoginResponse loginEmployee(LoginDTO loginDTO) {
       String msg="";
       Employee employee1=employeeRepo.findByEmail(loginDTO.getEmail());
       if(employee1!=null){
           String password=loginDTO.getPassword();
           String encodePassword=employee1.getPassword();
           Boolean isPwdRight=passwordEncoder.matches(password,encodePassword);
           if(isPwdRight){
               Optional<Employee>  employee=employeeRepo.findOneByEmailAndPassword(loginDTO.getEmail(),loginDTO.getPassword());
           if(employee.isPresent()){
    return new LoginResponse("Login Success",true);
           }else {
               return new LoginResponse("Login Failed",true);
           }

           }
           else{
               return new LoginResponse("Password Does not match",true);
           }
       }
           else {
               return  new LoginResponse("Email does not exist",true);
           }
       }*/
   @Override
   public LoginResponse loginEmployee(LoginDTO loginDTO) {
       Employee employee = employeeRepo.findByEmail(loginDTO.getEmail());

       if (employee != null) {
           String password = loginDTO.getPassword();
           String encodedPassword = employee.getPassword();

           // Check if the provided password matches the stored password
           if (passwordEncoder.matches(password, encodedPassword)) {
               return new LoginResponse("Login Success", true);
           } else {
               return new LoginResponse("Password does not match", true);
           }
       } else {
           return new LoginResponse("Email does not exist", true);
       }
   }


}
