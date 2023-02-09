package com.example.Assignment2.repository;
import com.example.Assignment2.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Integer> {

    //Native queries
    @Query(
            value = "SELECT * FROM Student s WHERE s.id=:id",
            nativeQuery = true
    )
    Student findStudentById(@Param("id") Integer id);


    @Query(
            value = "SELECT * FROM Student",
            nativeQuery = true
    )
    //Custom JPA methods
    List<Student> findAllStudents();


    @Query(
            value = "SELECT * FROM Student s WHERE s.name=:name",
            nativeQuery = true
    )
    List<Student> findByName(@Param("name") String name);


    @Query(
            value = "SELECT * FROM Student s WHERE s.age=:age",
            nativeQuery = true
    )
    List<Student> findByAge(@Param("age") Integer age);

}
