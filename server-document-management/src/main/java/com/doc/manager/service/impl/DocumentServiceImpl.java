package com.doc.manager.service.impl;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.DocumentService;
import com.doc.manager.transfer.DocumentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DocumentServiceImpl implements DocumentService {

    @Autowired
    private BeanConverter beanConverter;

    public RestResponse createDocument(DocumentDTO documentDTO) {
        return null;
    }

    public RestResponse uploadDocument(DocumentDTO documentDTO) {
        return null;
    }

    public RestResponse searchDocument(DocumentDTO documentDTO) {
        return null;
    }
}
