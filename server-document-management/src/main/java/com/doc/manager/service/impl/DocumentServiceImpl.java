package com.doc.manager.service.impl;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.DocumentRepository;
import com.doc.manager.domain.Document;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.DocumentService;
import com.doc.manager.transfer.DocumentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DocumentServiceImpl implements DocumentService {

    @Autowired
    private BeanConverter beanConverter;

    @Autowired
    private DocumentRepository documentRepository;

    public RestResponse createDocument(DocumentDTO documentDTO) {
        documentRepository.save(beanConverter.convertDocumentDTOToDocument(documentDTO));
        return new RestResponse("Success", "");
    }


    public RestResponse searchDocument(String name, int companyId) {
        Document document = null;
        if (name != null) {
            document = documentRepository.findByName(name);
        } else if (companyId != 0) {
            document = documentRepository.findByCompany(companyId);
        }
        return new RestResponse("success", beanConverter.convertDocumentToDocumentDTO(document));
    }
}
