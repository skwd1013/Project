package com.myapp.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ApiResponse<T> {
    private Status status;
    private Metadata metadata;
    private T results;  // Generic type
    private Data data;

    @Getter
    @Setter
    public static class Status {
        private int code;
        private String message;

        public Status(int code, String message) {
            this.code = code;
            this.message = message;
        }
    }

    @Getter
    @Setter
    public static class Metadata {
        private int resultCount;

        public Metadata(int resultCount) {
            this.resultCount = resultCount;
        }
    }

    @Getter
    @Setter
    public static class Data {
        private InputRestriction inputRestriction;

        public Data(InputRestriction inputRestriction) {
            this.inputRestriction = inputRestriction;
        }
    }

    @Getter
    @Setter
    public static class InputRestriction {
        private String maxGrade;

        public InputRestriction(String maxGrade) {
            this.maxGrade = maxGrade;
        }
    }

    public static <T> ApiResponse<T> makeResponse(T resultData, ErrorCode code, String maxGrade) {
        ApiResponse<T> response = new ApiResponse<>();
        Status status = new Status(code.getCode(), code.getMessage());
        response.setStatus(status);

        if (code == ErrorCode.SUCCESS) {
            Metadata metadata = new Metadata(1);
            response.setMetadata(metadata);
            response.setResults(resultData);
        } else {
            Data errorData = new Data(new InputRestriction(maxGrade));
            response.setData(errorData);
        }

        return response;
    }
}
