package com.doc.manager.facade;

import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.DocumentService;
import com.doc.manager.transfer.DocumentDTO;
import com.doc.manager.transfer.SearchDocumentDTO;
import com.doc.manager.util.Constants;
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

    @RequestMapping(value = "/searchDocument", method = RequestMethod.POST)
    public RestResponse searchDocument(@RequestBody SearchDocumentDTO searchDocumentDTO) {
        try {
            return documentService.searchDocument(searchDocumentDTO.getSearchByName(), searchDocumentDTO.getSearchByCompany());
        } catch (Exception ex) {
            return new RestResponse(Constants.FAILURE, "");
        }
    }

    @RequestMapping(value = "/getDocument", method = RequestMethod.POST)
    public RestResponse getDocument(@RequestBody SearchDocumentDTO searchDocumentDTO) {
        try {
            return documentService.getDocument(searchDocumentDTO.getSearchByName(), searchDocumentDTO.getSearchByCompany());
        } catch (Exception ex) {
            return new RestResponse(Constants.FAILURE, "");
        }
    }
}
