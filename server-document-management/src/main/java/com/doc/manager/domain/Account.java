package com.doc.manager.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "Account")
@Table(name = "account")
@Data
public class Account implements Serializable {
    @Id
    @Column(name = "account_id")
    private int employeeID;
    @Column(name = "user_role")
    @Enumerated(EnumType.STRING)
    private EUserRole userRole;
    @Column(name = "user_name")
    private String userName;
    private String password;
    private String name;
    @Column(name = "last_name")
    private String lastName;
    private String email;
    @Column(name = "phone")
    private String mobilePhone;
    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;
    private String position;

    public Account() {
    }

    public Account(String username, String password) {
        this.userName = username;
        this.password = password;
    }


}
