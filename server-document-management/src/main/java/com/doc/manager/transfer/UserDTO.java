package com.doc.manager.transfer;

import com.doc.manager.domain.EUserRole;
import lombok.Data;

@Data
public class UserDTO {
    private int employeeID;
    private EUserRole userRole;
    private String userName;
    private String password;
    private String name;
    private String lastName;
    private String email;
    private String mobilePhone;
    private CompanyDTO company;
    private String country;
    private String position;
    private String profession;

}
