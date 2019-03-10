package com.doc.manager.dao;

import com.doc.manager.domain.User;

import java.util.List;

public interface UserDAOService {

    void create(User entity);

    User find(User key);

    boolean isExisting(Class clazz, String idKey, String idValue);

}
