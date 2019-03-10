package com.doc.manager.dao;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;

@Transactional
public abstract class CoreDAO<E, K extends Serializable> implements GenericDAO<E, K> {

    @PersistenceContext
    EntityManager entityManager;

    private Class<? extends E> clazz;

    @PostConstruct
    protected void init() {
        clazz = (Class<E>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
    }

    public Class<? extends E> getClazz() {
        return clazz;
    }

    public void update(E entity) {
        entityManager.merge(entity);
    }

    public void remove(Class clazz, String ID) {
        Object o = entityManager.find(clazz, ID);
        if (o != null) {
            entityManager.remove(o);
        }
    }

    public E find(K key) {
        return (E) entityManager.find(clazz, key);
    }

    public void create(E entity) {
        entityManager.persist(entity);
    }

    public List<E> list(Class clazz) {
        return entityManager.createQuery(
                "select e from " + clazz.getName() + " e", clazz).getResultList();
    }

    public boolean isExisting(Class clazz, String idKey, String idValue) {
        int size = entityManager.createQuery("select e from " + clazz.getName() + " e where " + idKey + "= \'" + idValue + "\'").getResultList().size();
        if (size == 1) {
            return true;
        } else {
            return false;
        }
    }

    public void execute() {
        entityManager.createNamedQuery(new StringBuilder().append("runscript from '").append("./config/data/test1.h2.sql").append("'").toString());
    }
}
