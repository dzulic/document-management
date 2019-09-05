package com.doc.manager.service;

import com.doc.manager.responses.RestResponse;
import com.doc.manager.transfer.TemplateDTO;

public interface TemplateService {
    RestResponse createTemplate(TemplateDTO templateDTO);

    RestResponse searchTemplate(String name);

    RestResponse getTemplate(TemplateDTO templateDTO);
}
