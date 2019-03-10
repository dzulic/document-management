package com.doc.manager.dao;

import java.util.List;

public interface GenericDAO<E, K> {

    void create(E entity);

    void update(E entity);

    void remove(Class clazz, String ID) throws Exception;

    E find(K key);

    List<E> list(Class clazz);

    boolean isExisting(Class clazz, String idKey, String idValue);

}
