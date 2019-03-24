package com.doc.manager.service;

import com.doc.manager.responses.RestResponse;
import com.doc.manager.transfer.UserDTO;

public interface UserService {
    RestResponse createUser(UserDTO userDTO);

    RestResponse logoutUser();

    RestResponse loginUser(String userName, String password);
}
