package com.doc.manager.service.impl;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.DocumentRepository;
import com.doc.manager.domain.Document;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.DocumentService;
import com.doc.manager.transfer.DocumentDTO;
import com.doc.manager.util.Constants;
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
        try {
            documentRepository.save(beanConverter.convertDocumentDTOToDocument(documentDTO));
            return new RestResponse(Constants.SUCCESS, null);
        } catch (Exception ex) {
            return new RestResponse(Constants.FAILURE, null);
        }
    }


    public RestResponse searchDocument(String name, int companyId) {
        try {
            List<Document> documents = null;
            if (name != null) {
                documents = documentRepository.findByNameContaining(name);
            } else if (companyId != 0) {
                documents = documentRepository.findByCompany_CompanyId(companyId);
            }
            return new RestResponse(Constants.SUCCESS, beanConverter.convertDocumentListToDTOList(documents));
        } catch (
                Exception ex) {
            return new RestResponse(Constants.FAILURE, null);
        }

    }

    @Override
    public RestResponse getDocument(String searchByName, int id) {
        Document document = null;
        try {
            if (searchByName != null) {
                document = documentRepository.findByName(searchByName);
            } else {
                document = documentRepository.findById(Long.parseLong(id + ""));
            }
            return new RestResponse(Constants.SUCCESS, document);
        } catch (Exception ex) {
            return new RestResponse(Constants.FAILURE, null);
        }
    }
}
