package com.doc.manager.service.impl;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.DocumentRepository;
import com.doc.manager.domain.Document;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.DocumentService;
import com.doc.manager.transfer.DocumentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class DocumentServiceImpl implements DocumentService {

    @Autowired
    private BeanConverter beanConverter;

    @Autowired
    private DocumentRepository documentRepository;

    public RestResponse createDocument(DocumentDTO documentDTO) {
        documentRepository.save(beanConverter.convertDocumentDTOToDocument(documentDTO));
        return new RestResponse("Success", "");
    }


    public RestResponse searchDocument(String name, int companyId) {
        List<Document> documents = null;
        if (name != null) {
            documents = documentRepository.findByNameContaining(name);
        } else if (companyId != 0) {
            documents = documentRepository.findByCompany_CompanyId(companyId);
        }
        return new RestResponse("success", beanConverter.convertDocumentListToDTOList(documents));
    }

    @Override
    public RestResponse getDocument(String searchByName, int id) {
        Document document = null;
        if (searchByName != null) {
            document = documentRepository.findByName(searchByName);
        } else {
            document = documentRepository.findById(Long.parseLong(id + ""));
        }
        return new RestResponse("success", document);
    }
}
