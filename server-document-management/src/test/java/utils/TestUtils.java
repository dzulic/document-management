package utils;

import com.doc.manager.domain.Account;
import com.doc.manager.domain.Company;
import com.doc.manager.domain.EUserRole;
import com.doc.manager.domain.TemplateDocument;
import com.doc.manager.transfer.CompanyDTO;
import com.doc.manager.transfer.DocumentDTO;
import com.doc.manager.transfer.TemplateDTO;
import com.doc.manager.transfer.UserDTO;
import lombok.Data;

@Data
public class TestUtils {

    public static String dummyString = "test";
    public static int dummyint = 1111;
    public static EUserRole dummyUserRole = EUserRole.ADMIN;

    public static Account getAccountDummy() {
        Account account = new Account();
        account.setCompany(getCompanyDummy());
        account.setEmail(dummyString);
        account.setEmployeeID(dummyint);
        account.setLastName(dummyString);
        account.setMobilePhone(dummyString);
        account.setName(dummyString);
        account.setUserRole(dummyUserRole);
        account.setUserName(dummyString);
        account.setPosition(dummyString);
        account.setPassword(dummyString);
        return account;
    }

    public static UserDTO getUserDTODummy() {
        UserDTO userDTO = new UserDTO();
        userDTO.setName(dummyString);
        userDTO.setCompany(getCompanyDTODummy());
        userDTO.setCompanyId(123);
        userDTO.setEmployeeID(1111111);
        userDTO.setLastName(dummyString);
        return userDTO;
    }

    public static Company getCompanyDummy() {
        Company company = new Company();
        company.setCompanyId(dummyint);
        company.setBusiness(dummyString);
        company.setCity(dummyString);
        company.setCompanyId(dummyint);
        company.setCountry(dummyString);
        company.setEmail(dummyString);
        company.setPhone(dummyString);
        company.setCompanyName(dummyString);
        return company;
    }

    public static CompanyDTO getCompanyDTODummy() {
        CompanyDTO companyDTO = new CompanyDTO();
        companyDTO.setCompanyId(123);
        return companyDTO;
    }

    public static DocumentDTO getDocumentDTODummy() {
        DocumentDTO documentDTO = new DocumentDTO();
        documentDTO.setTemplateId(dummyint);
        documentDTO.setDocumentId(dummyint);
        documentDTO.setCompanyDTO(getCompanyDTODummy());
        documentDTO.setCreatedBy(getUserDTODummy());
        documentDTO.setContent(dummyString);
        documentDTO.setName(dummyString);
        return documentDTO;
    }

    public static TemplateDocument getTemplateDummy() {
        TemplateDocument templateDocument = new TemplateDocument();
        templateDocument.setCreatedBy(getAccountDummy());
        templateDocument.setId(dummyint);
        templateDocument.setContentType(dummyString);
        templateDocument.setData(dummyString);
        templateDocument.setFileName(dummyString);
        return templateDocument;
    }

    public static TemplateDTO getTemplateDTODummy() {
        TemplateDTO templateDTO = new TemplateDTO();
        templateDTO.setCreatedBy(getUserDTODummy());
        templateDTO.setId(String.valueOf(dummyint));
        templateDTO.setContentType(dummyString);
        templateDTO.setData(dummyString);
        templateDTO.setFileName(dummyString);
        return templateDTO;
    }
}
