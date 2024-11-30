package com.example.demo;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {

    @GetMapping("/emp")
   		
		public String Employee (){
		String Id="1";	
		String employeename="Amit";
		String department="Developer";
	
		String xx= "Id :" +Id + " <br>EmployeeName :"  + employeename + " <br>Department : " + department;
		return xx;
	}

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
