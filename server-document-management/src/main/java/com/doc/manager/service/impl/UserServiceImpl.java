package com.doc.manager.service.impl;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.UserRepository;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.UserService;
import com.doc.manager.transfer.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    BeanConverter beanConverter;
/*
    @Resource
    UserRepository userRepository;
*/

    public RestResponse createUser(UserDTO userDTO) {
       // userRepository.save(beanConverter.convertUserDTOToUser(userDTO));
        return new RestResponse("success", null);
    }

    public RestResponse logoutUser() {
        return null;
    }

    public RestResponse loginUser(String userName, String password) {
       // userRepository.findByUserName(userName);
        return new RestResponse("success", null);
    }
}
