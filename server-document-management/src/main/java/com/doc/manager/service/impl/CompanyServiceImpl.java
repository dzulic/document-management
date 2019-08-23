package com.doc.manager.service.impl;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.CompanyRepository;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.CompanyService;
import com.doc.manager.transfer.CompanyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private BeanConverter beanConverter;
    @Autowired
    CompanyRepository companyRepository;

    public RestResponse createCompany(CompanyDTO companyDTO) {
        companyRepository.save(beanConverter.convertCompanyDTOToCompany(companyDTO));
        return new RestResponse("success", null);
    }
}
