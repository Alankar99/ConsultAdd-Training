package com.example.Assignment2.controller;
import com.example.Assignment2.model.Student;
import com.example.Assignment2.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/students")
    public ResponseEntity<List<Student>> getStudents(){
        List<Student> allStudent = this.studentService.getAllStudents();
        if(allStudent.size()==0){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.of(Optional.of(allStudent));
    }

    @GetMapping("/studentbyname/{name}")
    public ResponseEntity<List<Student>> getStudentByName(@PathVariable String name){
        List<Student> allStudent = this.studentService.getStudentByName(name);
        if(allStudent.size() == 0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.of(Optional.of(allStudent));
    }

    @GetMapping("/studentbyage/{age}")
    public ResponseEntity<List<Student>> getStudentByAge(@PathVariable Integer age){
        List<Student> allStudent = this.studentService.getStudentByAge(age);
        if(allStudent.size()==0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.of(Optional.of(allStudent));
    }

    @PostMapping("/addstudent")
    public ResponseEntity<Student> createStudent(@RequestBody Student student){
        Student s = this.studentService.createNewStudent(student);
        if(s==null){
            return ResponseEntity.status(HttpStatus.ALREADY_REPORTED).build();
        }
        return ResponseEntity.of(Optional.of(s));
    }

    @PutMapping("/updatestudent")
    public ResponseEntity<String> updateStudent(@RequestBody Student student) throws Exception{
        String s = this.studentService.updateStudent(student);
        if(s==null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.of(Optional.of(s));
    }

    @DeleteMapping("/deletestudent/{id}")
    public ResponseEntity<String> deleteStudentById(@PathVariable Integer id){
        String s = this.studentService.deleteStudent(id);
        if(s==null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.of(Optional.of(s));
    }

}
