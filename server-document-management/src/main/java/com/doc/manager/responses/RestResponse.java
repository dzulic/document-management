package com.doc.manager.responses;

public class RestResponse {

    String message;
    Object data;

    public RestResponse(String message, Object data) {
        this.message = message;
        this.data = data;
    }
}
