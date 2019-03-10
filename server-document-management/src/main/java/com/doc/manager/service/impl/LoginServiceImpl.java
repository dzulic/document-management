package com.doc.manager.service.impl;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.UserDAOService;
import com.doc.manager.domain.User;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.transfer.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.doc.manager.service.LoginService;

@Service
public class LoginServiceImpl implements LoginService {
    @Autowired
    UserDAOService userDAOService;
    @Autowired
    BeanConverter beanConverter;


    public RestResponse loginUser(String username, String password) {
        User user = userDAOService.find(new User(username, password));
        return new RestResponse("success", user);
    }

    public RestResponse logoutUser() {
        return new RestResponse("success", null);
    }
}
