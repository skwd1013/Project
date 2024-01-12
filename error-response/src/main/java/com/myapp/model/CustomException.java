package com.myapp.model;

import lombok.Getter;

@Getter
public class CustomException extends RuntimeException {
    private final ErrorCode errorCode;
    private final ApiResponse.Data data;

    public CustomException(ErrorCode errorCode, String message, ApiResponse.Data data) {
        super(message);
        this.errorCode = errorCode;
        this.data = data;
    }
}
