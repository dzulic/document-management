package com.doc.manager.facade;

import com.doc.manager.util.Constants;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping(Constants.REST_ROOT_ENDPOINT + "/loginWS")
@RestController
public class LoginFacade {

    public void loginUser(){

    }

    public void logoutUser(){

    }
}