package com.doc.manager.service;

import com.doc.manager.response.RestResponse;

public interface LoginService {

    RestResponse loginUser(String user, String pass);
}
