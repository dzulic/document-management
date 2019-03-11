package com.doc.manager.facade;

import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.UserService;
import com.doc.manager.transfer.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/userWS")
@RestController
public class UserFacade {
    @Autowired
    UserService userService;

    @RequestMapping("/createUser")
    public RestResponse createUser(@RequestBody UserDTO userDTO) {
        try {
            return userService.createUser(userDTO);
        } catch (Exception ex) {
            return new RestResponse("error", null);
        }
    }

}
