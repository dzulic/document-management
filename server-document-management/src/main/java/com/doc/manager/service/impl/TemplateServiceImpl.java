package com.doc.manager.service.impl;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.AccountRepository;
import com.doc.manager.dao.TemplateRepository;
import com.doc.manager.domain.Account;
import com.doc.manager.domain.TemplateDocument;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.TemplateService;
import com.doc.manager.transfer.TemplateDTO;
import com.doc.manager.util.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TemplateServiceImpl implements TemplateService {

    @Autowired
    private BeanConverter beanConverter;

    @Autowired
    private TemplateRepository templateRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public RestResponse createTemplate(TemplateDTO templateDTO) {
        try {
            TemplateDocument templateDocument = beanConverter.convertTemplateDTOToTemplate(templateDTO);
            Account employee = accountRepository.findByEmployeeID(templateDocument.getCreatedBy().getEmployeeID());
            templateDocument.setCreatedBy(employee);
            templateRepository.save(templateDocument);
            return new RestResponse(Constants.SUCCESS, "Successfully");
        } catch (Exception ex) {
            return new RestResponse(Constants.FAILURE, null);
        }
    }

    @Override
    public RestResponse searchTemplate(String name, int id) {
        try {
            List<TemplateDocument> templateDocuments = null;
            if (name != null && id != 0) {
                templateDocuments = templateRepository.findByFileNameContainingAndCreatedBy_Company_CompanyId(name, id);
            } else if (name != null) {
                templateDocuments = templateRepository.findByFileNameContainingIgnoreCase(name);
            } else if (id != 0) {
                templateDocuments = templateRepository.findByCreatedBy_Company_CompanyId(id);
            }
            return new RestResponse(Constants.SUCCESS, beanConverter.convertDTemplateListToDTOList(templateDocuments));
        } catch (Exception ex) {
            return new RestResponse(Constants.FAILURE, null);
        }
    }

    @Override
    public RestResponse getTemplate(TemplateDTO templateDTO) {
        try {
            TemplateDocument template = templateRepository.getOne(Integer.parseInt(templateDTO.getId()));
            return new RestResponse(Constants.SUCCESS, beanConverter.convertTemplateToTemplateDTO(template));
        } catch (Exception ex) {
            return new RestResponse(Constants.FAILURE, null);
        }
    }
}