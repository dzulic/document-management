package com.doc.manager.service.impl;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.CompanyRepository;
import com.doc.manager.domain.Company;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.CompanyService;
import com.doc.manager.transfer.CompanyDTO;
import com.doc.manager.util.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private BeanConverter beanConverter;
    @Autowired
    CompanyRepository companyRepository;

    @Override
    public RestResponse createCompany(CompanyDTO companyDTO) {
        Company savedCompany = companyRepository.save(beanConverter.convertCompanyDTOToCompany(companyDTO));
        return new RestResponse(Constants.SUCCESS, savedCompany);
    }

    @Override
    public RestResponse getCompanies() {
        List<Company> allCompanies = companyRepository.findAll();
        return new RestResponse(Constants.SUCCESS, allCompanies);
    }
}
