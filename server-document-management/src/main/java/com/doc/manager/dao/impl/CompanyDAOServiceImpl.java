package com.doc.manager.dao.impl;

import com.doc.manager.dao.CompanyDAOService;
import com.doc.manager.domain.Company;
import com.doc.manager.responses.RestResponse;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public class CompanyDAOServiceImpl implements CompanyDAOService {
    public RestResponse createCompany(Company company) {
        return null;
    }
}
