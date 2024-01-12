package com.myapp.controller;

import com.myapp.model.ApiResponse;
import com.myapp.model.CustomException;
import com.myapp.model.ErrorCode;
import com.myapp.model.Student;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final List<Student> students = new ArrayList<>();

    @PostMapping("/add")
    public ResponseEntity<ApiResponse<List<Student>>> addStudent(@RequestBody Student student) {
        if (student.getGrade() < 0 || student.getGrade() > 6) {
            throw new CustomException(
                    ErrorCode.GRADE_TOO_HIGH,
                    ErrorCode.GRADE_TOO_HIGH.getMessage(),
                    new ApiResponse.Data(new ApiResponse.InputRestriction("0-6"))
            );
        }
        students.add(student);
        return ResponseEntity.ok(ApiResponse.makeResponse(List.of(student), ErrorCode.SUCCESS, null));
    }

    @GetMapping("/sortByGrade")
    public ResponseEntity<ApiResponse<List<Student>>> sortByGrade() {
        List<Student> sortedStudents = students.stream()
                .sorted(Comparator.comparingInt(Student::getGrade))
                .collect(Collectors.toList());
        return ResponseEntity.ok(ApiResponse.makeResponse(sortedStudents, ErrorCode.SUCCESS, null));
    }

    @GetMapping("/findByGrade/{grade}")
    public ResponseEntity<ApiResponse<List<Student>>> findStudentsByGrade(@PathVariable("grade") int grade) {
        List<Student> matchingStudents = students.stream()
                .filter(student -> student.getGrade() == grade)
                .collect(Collectors.toList());
        if (matchingStudents.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(ApiResponse.makeResponse(matchingStudents, ErrorCode.SUCCESS, null));
    }
}
