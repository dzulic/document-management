package com.doc.manager.facade;

import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.DocumentService;
import com.doc.manager.transfer.DocumentDTO;
import com.doc.manager.util.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/documentWS")
@RestController
public class DocumentFacade {
    @Autowired
    DocumentService documentService;

    @RequestMapping("/createDocument")
    public RestResponse createDocument(@RequestBody DocumentDTO documentDTO) {
        try {
            return documentService.createDocument(documentDTO);
        } catch (Exception ex) {
            return new RestResponse();
        }
    }

    @RequestMapping("/uploadDocument")
    public RestResponse uploadDocument(@RequestBody DocumentDTO documentDTO) {
        try {
            return documentService.uploadDocument(documentDTO);
        } catch (Exception ex) {
            return new RestResponse();
        }
    }

    @RequestMapping("/searchDocument")
    public RestResponse searchDocument(@RequestBody DocumentDTO documentDTO) {
        try {
            return documentService.searchDocument(documentDTO);
        } catch (Exception ex) {
            return new RestResponse();
        }
    }
}
