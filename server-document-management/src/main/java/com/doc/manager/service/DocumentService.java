package com.doc.manager.service;

import com.doc.manager.responses.RestResponse;
import com.doc.manager.transfer.DocumentDTO;

public interface DocumentService {
    RestResponse createDocument(DocumentDTO documentDTO);

    RestResponse searchDocument(String name, int companyId);

    RestResponse getDocument(String searchByName, int id);
}
