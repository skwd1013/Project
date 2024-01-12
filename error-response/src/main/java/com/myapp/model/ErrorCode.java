package com.myapp.model;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter // Lombok annotation to create getters
public enum ErrorCode {
    SUCCESS(200, "OK", HttpStatus.OK),
    GRADE_TOO_HIGH(300, "Grade는 6 이상을 입력할 수 없습니다.", HttpStatus.BAD_REQUEST);

    private final int code;
    private final String message;
    private final HttpStatus httpStatus;

    ErrorCode(int code, String message, HttpStatus httpStatus) {
        this.code = code;
        this.message = message;
        this.httpStatus = httpStatus;
    }
}
