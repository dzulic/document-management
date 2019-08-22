package com.doc.manager.responses;

import lombok.Data;

@Data
public class RestResponse {

    String message;
    Object data;

    public RestResponse(String message, Object data) {
        this.message = message;
        this.data = data;
    }
}
