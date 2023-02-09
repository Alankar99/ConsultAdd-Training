package com.example.Assignment2.service;

import com.example.Assignment2.model.Student;
import com.example.Assignment2.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public Student createNewStudent(Student student){
        if(studentRepository.existsById(student.getId())){
            return null;
        }else{
            return studentRepository.save(student);
//            return "Record inserted successfully!!";
        }
    }

    public List<Student> getAllStudents(){
        return studentRepository.findAllStudents();
    }


    //Custom JPA repository method - findByName()
    public List<Student> getStudentByName(String name){
        return studentRepository.findByName(name);
    }

    //Custom JPA repository method - findByAge()
    public List<Student> getStudentByAge(Integer age){
        return studentRepository.findByAge(age);
    }

    public String updateStudent(Student student) throws Exception{
        Student temp = studentRepository.findStudentById(student.getId());
        if(temp!=null){
            temp.setAge(student.getAge());
            temp.setCity(student.getCity());
            temp.setName(student.getName());
            temp.setGender(student.getGender());
            temp.setContact(student.getContact());
            studentRepository.save(temp);
            return "Student updated successfully!";
        }else{
            return null;
        }
    }

    public String deleteStudent(Integer id){
        if(studentRepository.existsById(id)){
            studentRepository.deleteById(id);
            return "Student deleted successfully!";
        }
        return null;
    }
}
