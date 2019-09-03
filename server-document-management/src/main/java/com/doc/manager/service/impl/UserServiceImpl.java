package com.doc.manager.service.impl;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.AccountRepository;
import com.doc.manager.domain.Account;
import com.doc.manager.responses.LoginRestResponse;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.security.AccountDetails;
import com.doc.manager.service.UserService;
import com.doc.manager.transfer.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import static com.doc.manager.util.Constants.FAILURE;
import static com.doc.manager.util.Constants.SUCCESS;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private BeanConverter beanConverter;

    @Autowired
    private AccountRepository accountRepository;

    @Resource
    private AuthenticationManager authenticationManager;

    public RestResponse createUser(UserDTO userDTO) {
        try {
            Account account = beanConverter.convertUserDTOToUser(userDTO);
            accountRepository.save(account);
            return new RestResponse(SUCCESS, null);
        } catch (Exception ex) {
            return new RestResponse(FAILURE, null);
        }
    }

    public RestResponse logoutUser() {
        return null;
    }

    public RestResponse loginUser(String userName, String password) {
        Authentication request = new UsernamePasswordAuthenticationToken(userName, password);
        LoginRestResponse lr = new LoginRestResponse(null, null);

        try {
            Authentication result = authenticationManager.authenticate(request);

            SecurityContextHolder.getContext().setAuthentication(result);

            ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
            HttpSession session = attr.getRequest().getSession();
            session.setAttribute("userName", userName);
            session.setAttribute("password", password);
            lr.setLoggedIn(true);
            lr.setData(((AccountDetails) result.getPrincipal()).getAccount());
        } catch (AuthenticationException authException) {
            lr.setLoggedIn(false);
            lr.setMessage("bad credentials");
        }
        return lr;

    }
}
