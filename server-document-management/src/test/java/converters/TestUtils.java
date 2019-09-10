package converters;

import com.doc.manager.domain.Account;
import com.doc.manager.domain.Company;
import com.doc.manager.domain.EUserRole;
import com.doc.manager.transfer.CompanyDTO;
import com.doc.manager.transfer.UserDTO;
import lombok.Data;

@Data
public class TestUtils {

    private static String dummyString = "test";
    private static int dummyint = 1111;
    private static EUserRole dummyUserRole = EUserRole.ADMIN;

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

}
