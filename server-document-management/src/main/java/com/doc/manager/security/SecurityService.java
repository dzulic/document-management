package com.doc.manager.security;

public interface SecurityService {
    String findLoggedInUsername();
    void autoLogin(String username, String password);

}
