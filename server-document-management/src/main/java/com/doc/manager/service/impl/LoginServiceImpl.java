package com.doc.manager.service.impl;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    BeanConverter beanConverter;


    public RestResponse loginUser(String username, String password) {
       // User user = userDAOService.(new User(username, password));
      //  return new RestResponse("success", user);
        return null;
    }

    public RestResponse logoutUser() {
        return new RestResponse("success", null);
    }
}
