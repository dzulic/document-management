package com.doc.manager.service;

import com.doc.manager.responses.RestResponse;
import com.doc.manager.transfer.CompanyDTO;

public interface CompanyService {
    RestResponse createCompany(CompanyDTO companyDTO);

    RestResponse getCompanies();
}
