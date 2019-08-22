package com.doc.manager.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity(name = "Company")
@Table(name = "company")
@Data
public class Company implements Serializable {
    @Id
    @Column(name = "company_id")
    String companyId;
    String companyName;
    String country;
    String city;
    String business;
    String phone;
    String email;

}
