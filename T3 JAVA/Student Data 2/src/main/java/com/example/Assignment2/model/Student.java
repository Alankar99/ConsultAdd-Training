package com.example.Assignment2.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "Student")
public class Student {
    @Id
    private int id;
    private String name;
    private int age;
    private long contact;
    private String gender;
    private String city;

    public Student(){

    }
    public Student(int id, String name, int age, long contact, String gender, String city){
        this.id = id;
        this.name = name;
        this.age = age;
        this.contact = contact;
        this.gender = gender;
        this.city = city;
    }
}
