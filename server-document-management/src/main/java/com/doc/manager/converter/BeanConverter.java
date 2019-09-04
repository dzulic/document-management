package com.doc.manager.converter;

import com.doc.manager.domain.Account;
import com.doc.manager.domain.Company;
import com.doc.manager.domain.Document;
import com.doc.manager.domain.TemplateDocument;
import com.doc.manager.transfer.CompanyDTO;
import com.doc.manager.transfer.DocumentDTO;
import com.doc.manager.transfer.TemplateDTO;
import com.doc.manager.transfer.UserDTO;
import org.apache.tomcat.util.codec.binary.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class BeanConverter {

    public Account convertUserDTOToUser(UserDTO userDTO) {
        Account account = null;
        if (userDTO != null) {
            account = new Account();
            BeanUtils.copyProperties(userDTO, account);
        }
        return account;
    }

    public UserDTO convertUserToUserDTO(Account account) {
        UserDTO userDTO = null;
        if (account != null) {
            userDTO = new UserDTO();
            BeanUtils.copyProperties(userDTO, account);
            userDTO.setName(account.getName());
        }
        return userDTO;
    }

    public Company convertCompanyDTOToCompany(CompanyDTO companyDTO) {
        Company company = null;
        if (companyDTO != null) {
            company = new Company();
            BeanUtils.copyProperties(companyDTO, company);
        }
        return company;
    }


    public CompanyDTO convertCompanyDTOToCompany(Company company) {
        CompanyDTO companyDTO = null;
        if (company != null) {
            companyDTO = new CompanyDTO();
            BeanUtils.copyProperties(company, companyDTO);
        }
        return companyDTO;
    }

    public Document convertDocumentDTOToDocument(DocumentDTO documentDTO) {
        Document document = null;
        if (documentDTO != null) {
            document = new Document();
            BeanUtils.copyProperties(documentDTO, document);
            document.setContent(documentDTO.getContent().getBytes());
            document.setCreatedBy(convertUserDTOToUser(documentDTO.getCreatedBy()));
            document.setCompany(convertCompanyDTOToCompany(documentDTO.getCreatedBy().getCompany()));
            //TODO REMOVe
            TemplateDocument templateDocument = new TemplateDocument();
            templateDocument.setId(123);
            document.setTemplate(templateDocument);
        }
        return document;
    }


    public DocumentDTO convertDocumentToDocumentDTO(Document document) {
        DocumentDTO documentDTO = null;
        if (document != null) {
            documentDTO = new DocumentDTO();
            BeanUtils.copyProperties(document, documentDTO);
            documentDTO.setCreatedBy(convertUserToUserDTO(document.getCreatedBy()));
            documentDTO.setCompanyDTO(convertCompanyDTOToCompany(document.getCompany()));
            documentDTO.setContent(StringUtils.newStringUtf8(document.getContent()));
        }
        return documentDTO;
    }

    public TemplateDocument convertTemplateDTOToTemplate(TemplateDTO templateDTO) {
        TemplateDocument templateDocument = null;
        if (templateDTO != null) {
            templateDocument = new TemplateDocument();
            BeanUtils.copyProperties(templateDTO, templateDocument);
            templateDocument.setCreatedBy(convertUserDTOToUser(templateDTO.getCreatedBy()));
        }
        return templateDocument;
    }

    public List<DocumentDTO> convertDocumentListToDTOList(List<Document> documents) {
        List<DocumentDTO> documentDTOS = new ArrayList<>();
        for (Document doc : documents) {
            DocumentDTO documentDTO = convertDocumentToDocumentDTO(doc);
            documentDTOS.add(documentDTO);
        }
        return documentDTOS;
    }
}
