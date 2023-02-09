package com.example.practice.service;
import java.util.NoSuchElementException;
import com.example.practice.model.Student;
import com.example.practice.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

    //Create New student details

    public String createStudent(Student student){
        if(this.studentRepo.existsById(student.getId())){
            return "Student already exists";
        }
        else{
            this.studentRepo.save(student);
            return "Student details are saved.";
        }
    }

    //get all student details

    public List<Student> getStudents(){
        return this.studentRepo.findAll();
    }


    //delete student
    public String deleteStudent(int id){
        studentRepo.deleteById(id);
        return "Student with ID - " + id + " Successfully deleted!";
    }

    //update student
    public Student updateStudent(Student student) throws Exception {
        Student existingStudent = studentRepo.findById(student.getId()).orElseThrow(NoSuchElementException::new);
        existingStudent.setAge(student.getAge());
        existingStudent.setName(student.getName());
        return studentRepo.save(existingStudent);
    }

    //get student by id
    public Student getStudentById(int id) throws Exception {
        return studentRepo.findById(id).orElseThrow(NoSuchElementException::new);
    }

}
