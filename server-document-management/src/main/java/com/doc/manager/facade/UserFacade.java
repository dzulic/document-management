package com.doc.manager.facade;

import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.UserService;
import com.doc.manager.transfer.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/userWS")
@RestController
public class UserFacade {
    @Autowired
    UserService userService;

    @RequestMapping(value = "/createUser", method = RequestMethod.POST)
    public RestResponse createUser(@RequestBody UserDTO userDTO) {
        try {
            return userService.createUser(userDTO);
        } catch (Exception ex) {
            return new RestResponse("error", null);
        }
    }
    @RequestMapping("/logoutUser")
    public RestResponse logoutUser() {
        try {
            return userService.logoutUser();
        } catch (Exception ex) {
            return new RestResponse("error", null);
        }
    }

    @RequestMapping("/loginUser")
    public RestResponse loginUser(@RequestBody UserDTO user) {
        try {
            return userService.loginUser(user.getUserName(), user.getPassword());
        } catch (Exception ex) {
            return new RestResponse("error", null);
        }
    }

}
