package com.doc.manager.dao;

import java.util.List;

public interface CoreDAO {
    void save(Object object);

    void remove(Object object);

    Object get(Object object);

    List<Object> list(Object object);

}
