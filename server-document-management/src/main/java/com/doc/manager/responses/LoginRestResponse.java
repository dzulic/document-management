package com.doc.manager.responses;

import lombok.Data;

@Data
public class LoginRestResponse extends RestResponse {

    private boolean loggedIn;

    public LoginRestResponse(String message, Object data) {
        super(message, data);

    }
}
