package com.doc.manager.dao.impl;

import com.doc.manager.dao.CoreDAO;
import com.doc.manager.dao.UserDAOService;
import com.doc.manager.domain.User;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class UserDAOServiceImpl extends CoreDAO implements UserDAOService {

    public User find(User key) {
        return (User) super.find(key);
    }

    public void create(User entity) {
        super.create(entity);
    }

}
