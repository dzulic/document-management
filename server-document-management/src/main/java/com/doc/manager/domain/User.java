package com.doc.manager.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "User")
public class User implements Serializable {
    @Id
    private String id;
    private EUserType userType;
    private String userName;
    private String password;
    private String name;
    private String lastName;
    private String email;
    @Column(name = "phone")
    private String mobilePhone;
    private String company;
    private String country;
    private String team;
    private String position;

    public User() {
    }

    public User(String username, String password) {
        this.userName = username;
        this.password = password;
    }

    public String getId() {
        return id;
    }


}
