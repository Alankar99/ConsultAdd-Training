package com.example.Assignment2;

import com.example.Assignment2.model.Student;
import com.example.Assignment2.repository.StudentRepository;
import com.example.Assignment2.service.StudentService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class Assignment2ApplicationTests {

//	@Test
//	void contextLoads() {
//	}

	@Autowired
	private StudentService studentService;
	@MockBean
	private StudentRepository studentRepository;

	@Test
	public void TestGetAllStudents(){
		when(studentRepository.findAllStudents()).thenReturn(Stream
				.of(new Student(1, "kajal", 12, 838466764, "male", "jaipur"),
						new Student(2, "atul", 19, 928466764, "male", "indore"))
				.collect(Collectors.toList()));
		assertEquals(2, studentService.getAllStudents().size());
	}
	@Test
	public void getStudentByNameTest(){
		String name = "kajal";
		when(studentRepository.findByName(name)).thenReturn(Stream
				.of(new Student(1, "kajal", 12, 838466764, "female", "jaipur"))
				.collect(Collectors.toList()));
		assertEquals(1, studentService.getStudentByName(name).size());
	}

	@Test
	public void testCreateNewStudent(){
		Student student = new Student(1, "kajal", 12, 838466764, "female", "jaipur");
		when(studentRepository.save(student)).thenReturn(student);
		assertEquals(student, studentService.createNewStudent(student));
	}

	@Test
	public void testGetStudentByAge(){
		int age=20;
		when(studentRepository.findByAge(age)).thenReturn(Stream
				.of(new Student(1, "kajal", 20, 838466764, "male", "jaipur"))
				.collect(Collectors.toList()));
		assertEquals(1,studentService.getStudentByAge(age).size());
	}
}
