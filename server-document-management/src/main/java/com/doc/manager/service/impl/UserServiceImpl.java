package com.doc.manager.service.impl;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.UserDAOService;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.transfer.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.doc.manager.service.UserService;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserDAOService userDAOService;
    @Autowired
    BeanConverter beanConverter;

    public RestResponse createUser(UserDTO userDTO) {
        userDAOService.create(beanConverter.convertUserDTOToUser(userDTO));
        return new RestResponse("success",null);
    }
}
