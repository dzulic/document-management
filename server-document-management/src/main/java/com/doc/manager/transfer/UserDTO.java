package com.doc.manager.transfer;

import com.doc.manager.domain.EUserRole;
import lombok.Data;

@Data
public class UserDTO {
    private String employeeID;
    private EUserRole userType;
    private String userName;
    private String password;
    private String name;
    private String lastName;
    private String email;
    private String mobilePhone;
    private String company;
    private String country;
    private String team;
    private String position;
    private String profession;

}
