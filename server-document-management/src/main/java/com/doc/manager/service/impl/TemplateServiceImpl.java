package com.doc.manager.service.impl;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.TemplateRepository;
import com.doc.manager.domain.TemplateDocument;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.TemplateService;
import com.doc.manager.transfer.TemplateDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @Override
    public RestResponse searchTemplate(String name) {
        List<TemplateDocument> templateDocuments = null;
        if (name != null) {
            templateDocuments = templateRepository.findByFileNameContaining(name);
        }
        return new RestResponse("success", beanConverter.convertDTemplateListToDTOList(templateDocuments));
    }

    @Override
    public RestResponse getTemplate(TemplateDTO templateDTO) {
        TemplateDocument template = templateRepository.getOne(Integer.parseInt(templateDTO.getId()));
        return new RestResponse("SUCCESS", beanConverter.convertTemplateToTemplateDTO(template));
    }
}