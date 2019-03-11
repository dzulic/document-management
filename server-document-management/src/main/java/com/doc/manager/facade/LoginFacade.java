package com.doc.manager.facade;

import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.LoginService;
import com.doc.manager.transfer.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/loginWS")
@RestController
public class LoginFacade {
    @Autowired
    LoginService loginService;

    @RequestMapping("/logoutUser")
    public RestResponse logoutUser() {
        try {
            return loginService.logoutUser();
        } catch (Exception ex) {
            return new RestResponse("error", null);
        }
    }

    @RequestMapping("/loginUser")
    public RestResponse loginUser(@RequestBody UserDTO user) {
        try {
            return loginService.loginUser(user.getUserName(), user.getPassword());
        } catch (Exception ex) {
            return new RestResponse("error", null);
        }
    }
}
