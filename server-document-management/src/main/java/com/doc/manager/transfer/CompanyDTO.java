package com.doc.manager.transfer;

import lombok.Data;

@Data
public class CompanyDTO {

    int companyId;
    String companyName;
    String country;
    String city;
    String business;
    String phone;
    String email;
    int yearOfEstablishment;
}
