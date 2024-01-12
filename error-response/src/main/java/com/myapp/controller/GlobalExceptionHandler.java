// File: src/main/java/com/myapp/controller/GlobalExceptionHandler.java

package com.myapp.controller;

import com.myapp.model.ApiResponse;
import com.myapp.model.CustomException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = CustomException.class)
    public ResponseEntity<ApiResponse<Object>> handleCustomException(CustomException ex) {
        ApiResponse.Status status = new ApiResponse.Status(ex.getErrorCode().getCode(), ex.getMessage());
        ApiResponse<Object> response = new ApiResponse<>();
        response.setStatus(status);
        if (ex.getData() != null) {
            response.setData(ex.getData());
        }
        return new ResponseEntity<>(response, ex.getErrorCode().getHttpStatus());
    }

    // Other exception handlers can be added here as needed.
}
