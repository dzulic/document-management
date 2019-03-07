package com.doc.manager.service;

import com.doc.manager.responses.RestResponse;

public interface LoginService {

    RestResponse loginUser(String username, String password);

    RestResponse logoutUser();
}
