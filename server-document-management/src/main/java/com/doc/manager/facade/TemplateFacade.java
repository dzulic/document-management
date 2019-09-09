package com.doc.manager.facade;

import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.TemplateService;
import com.doc.manager.transfer.SearchDocumentDTO;
import com.doc.manager.transfer.TemplateDTO;
import com.doc.manager.util.Constants;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@Slf4j
@RestController
@RequestMapping("/templateWS")
@CrossOrigin(value = {"*"})
public class TemplateFacade {

    @Autowired
    TemplateService templateService;

    @RequestMapping("/createTemplate")
    public RestResponse uploadNewFile(@RequestBody TemplateDTO templateDTO) throws IOException {
        try {
            return templateService.createTemplate(templateDTO);
        } catch (Exception ex) {
            return new RestResponse(Constants.FAILURE, "");
        }
    }


    @RequestMapping("/getTemplate")
    public RestResponse getTemplate(@RequestBody TemplateDTO templateDTO) throws IOException {
        try {
            return templateService.getTemplate(templateDTO);
        } catch (Exception ex) {
            return new RestResponse(Constants.FAILURE, "");
        }
    }

    @RequestMapping("/searchTemplate")
    public RestResponse searchTemplate(@RequestBody SearchDocumentDTO templateDTO) throws IOException {
        try {
            return templateService.searchTemplate(templateDTO.getSearchByName(), templateDTO.getSearchByCompany());
        } catch (Exception ex) {
            return new RestResponse(Constants.FAILURE, "");
        }
    }
}
