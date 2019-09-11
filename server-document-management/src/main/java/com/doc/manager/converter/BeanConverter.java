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
            account.setCompany(convertCompanyDTOToCompany(userDTO.getCompany()));
        }
        return account;
    }

    public UserDTO convertUserToUserDTO(Account account) {
        UserDTO userDTO = null;
        if (account != null) {
            userDTO = new UserDTO();
            BeanUtils.copyProperties(account, userDTO);
            userDTO.setCompanyId(account.getCompany().getCompanyId());
            userDTO.setCompany(convertCompanyToCompanyDTO(account.getCompany()));
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


    public CompanyDTO convertCompanyToCompanyDTO(Company company) {
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
            documentDTO.setCompanyDTO(convertCompanyToCompanyDTO(document.getCompany()));
            documentDTO.setDocumentId(Integer.parseInt(String.valueOf(document.getId())));
            documentDTO.setContent(StringUtils.newStringUtf8(document.getContent()));
            if (document.getTemplate() != null) {
                documentDTO.setTemplateId(document.getTemplate().getId());
            } else {
                documentDTO.setTemplateId(123);

            }
            //TODO REMOVE

        }
        return documentDTO;
    }

    public TemplateDocument convertTemplateDTOToTemplate(TemplateDTO templateDTO) {
        TemplateDocument templateDocument = null;
        if (templateDTO != null) {
            templateDocument = new TemplateDocument();
            templateDocument.setId(Integer.parseInt(templateDTO.getId()));
            BeanUtils.copyProperties(templateDTO, templateDocument);
            templateDocument.setCreatedBy(convertUserDTOToUser(templateDTO.getCreatedBy()));
        }
        return templateDocument;
    }

    public TemplateDTO convertTemplateToTemplateDTO(TemplateDocument template) {
        TemplateDTO templateDTO = null;
        if (template != null) {
            templateDTO = new TemplateDTO();
            BeanUtils.copyProperties(template, templateDTO);
            templateDTO.setId(String.valueOf(template.getId()));
            templateDTO.setData(template.getData());
            templateDTO.setCreatedBy(convertUserToUserDTO(template.getCreatedBy()));
        }
        return templateDTO;
    }

    public List<DocumentDTO> convertDocumentListToDTOList(List<Document> documents) {
        List<DocumentDTO> documentDTOS = new ArrayList<>();
        for (Document doc : documents) {
            DocumentDTO documentDTO = convertDocumentToDocumentDTO(doc);
            documentDTOS.add(documentDTO);
        }
        return documentDTOS;
    }

    public List<TemplateDTO> convertDTemplateListToDTOList(List<TemplateDocument> documents) {
        List<TemplateDTO> documentDTOS = new ArrayList<>();
        for (TemplateDocument doc : documents) {
            TemplateDTO documentDTO = convertTemplateToTemplateDTO(doc);
            documentDTOS.add(documentDTO);
        }
        return documentDTOS;
    }
}
