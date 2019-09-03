package com.doc.manager.converter;

import com.doc.manager.domain.Account;
import com.doc.manager.domain.Company;
import com.doc.manager.domain.Document;
import com.doc.manager.domain.TemplateDocument;
import com.doc.manager.transfer.CompanyDTO;
import com.doc.manager.transfer.DocumentDTO;
import com.doc.manager.transfer.TemplateDTO;
import com.doc.manager.transfer.UserDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

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

    public Document convertDocumentDTOToDocument(DocumentDTO documentDTO) {
        Document document = null;
        if (documentDTO != null) {
            document = new Document();
            BeanUtils.copyProperties(documentDTO, document);
            document.setCreatedBy(convertUserDTOToUser(documentDTO.getCreatedBy()));
            document.setCompany(convertCompanyDTOToCompany(documentDTO.getCreatedBy().getCompany()));
        }
        return document;
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
}
