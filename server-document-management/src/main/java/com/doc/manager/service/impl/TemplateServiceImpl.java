package com.doc.manager.service.impl;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.TemplateRepository;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.TemplateService;
import com.doc.manager.transfer.TemplateDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TemplateServiceImpl implements TemplateService {

    @Autowired
    private BeanConverter beanConverter;

    @Autowired
    private TemplateRepository templateRepository;

    @Override
    public RestResponse createTemplate(TemplateDTO templateDTO) {
        templateRepository.save(beanConverter.convertTemplateDTOToTemplate(templateDTO));
        return new RestResponse("SUCCESS", null);
    }
}