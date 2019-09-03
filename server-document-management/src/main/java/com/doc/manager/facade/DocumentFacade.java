package com.doc.manager.facade;

import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.DocumentService;
import com.doc.manager.transfer.DocumentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/documentWS")
@RestController
@CrossOrigin(value = "*")
public class DocumentFacade {
    @Autowired
    DocumentService documentService;

    @RequestMapping(value = "/createDocument", method = RequestMethod.POST)
    public RestResponse createDocument(@RequestBody DocumentDTO documentDTO) {
        try {
            return documentService.createDocument(documentDTO);
        } catch (Exception ex) {
            return new RestResponse("error", null);
        }
    }

    @RequestMapping("/uploadDocument")
    public RestResponse uploadDocument(@RequestBody DocumentDTO documentDTO) {
        try {
            return documentService.uploadDocument(documentDTO);
        } catch (Exception ex) {
            return new RestResponse("error", null);
        }
    }

    @RequestMapping("/searchDocument")
    public RestResponse searchDocument(@RequestBody DocumentDTO documentDTO) {
        try {
            return documentService.searchDocument(documentDTO);
        } catch (Exception ex) {
            return new RestResponse("error", null);
        }
    }
}
