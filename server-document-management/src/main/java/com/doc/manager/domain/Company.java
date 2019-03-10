package com.doc.manager.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Company {
    @Id
    String companyNo;
    String companyName;
    String country;
    String city;
    String business;
    String phone;
    String email;
    int yearOfEstablishment;



}
