package com.doc.manager.service.impl;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.AccountRepository;
import com.doc.manager.domain.Account;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.UserService;
import com.doc.manager.transfer.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.doc.manager.util.Constants.FAILURE;
import static com.doc.manager.util.Constants.SUCCESS;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private BeanConverter beanConverter;

    @Autowired
    private AccountRepository accountRepository;


    public RestResponse createUser(UserDTO userDTO) {
        try {
            Account account = accountRepository.save(beanConverter.convertUserDTOToUser(userDTO));
            return new RestResponse(SUCCESS, null);
        } catch (Exception ex) {
            return new RestResponse(FAILURE, null);
        }
    }

    public RestResponse logoutUser() {
        return null;
    }

    public RestResponse loginUser(String userName, String password) {
        Account account = accountRepository.findByUserNameAndPassword(userName, password);
        if (account != null) {
            return new RestResponse(SUCCESS, beanConverter.convertUserToUserDTO(account));
        } else {
            return new RestResponse(FAILURE, null);

        }
    }
}
