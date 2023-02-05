package com.example.practice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
public class Student {

    @Id
    private Integer stuId;
    private String stuName;
    private Integer stuAge;

    public Integer getId() {
        return stuId;
    }

    public void setId(Integer id) {
        this.stuId = id;
    }

    public String getName() {
        return stuName;
    }

    public void setName(String name) {
        this.stuName = name;
    }

    public Integer getAge() {
        return stuAge;
    }

    public void setAge(Integer age) {
        this.stuAge = age;
    }

    public Student(Integer id, String name, Integer age) {
        this.stuId = id;
        this.stuName = name;
        this.stuAge = age;
    }
}
