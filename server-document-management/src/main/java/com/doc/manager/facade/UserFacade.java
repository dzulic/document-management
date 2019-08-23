package com.doc.manager.facade;

import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.UserService;
import com.doc.manager.transfer.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/userWS")
@RestController
@CrossOrigin(value = "*")
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

    @RequestMapping(value = "/loginUser", method = RequestMethod.GET)
    @CrossOrigin(value = "*")
    public RestResponse loginUser(@RequestBody UserDTO user) {
        try {
            return userService.loginUser(user.getUserName(), user.getPassword());
        } catch (Exception ex) {
            return new RestResponse("error", null);
        }
    }

}
