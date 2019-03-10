package com.doc.manager.dao;

import com.doc.manager.domain.Company;
import com.doc.manager.responses.RestResponse;

public interface CompanyDAOService {

    RestResponse createCompany(Company company);
}
