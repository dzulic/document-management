package com.doc.manager.responses;

import lombok.Data;

import java.io.Serializable;

@Data
public class RestResponse implements Serializable {

    String message;
    Object data;

    public RestResponse(String message, Object data) {
        this.message = message;
        this.data = data;
    }
}
