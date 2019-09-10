package converters;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.domain.Account;
import com.doc.manager.domain.Company;
import com.doc.manager.transfer.CompanyDTO;
import com.doc.manager.transfer.UserDTO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.Assert.assertEquals;

@RunWith(MockitoJUnitRunner.class)
public class BeanConverterTest {
    @InjectMocks
    private BeanConverter beanConverter;


    @Test
    public void convertUserDTOToUserTest() {
        UserDTO userDTODummy = TestUtils.getUserDTODummy();
        Account accountFromDTO = beanConverter.convertUserDTOToUser(userDTODummy);
        UserDTO userDTOfromAccount = beanConverter.convertUserToUserDTO(accountFromDTO);
        assertEquals("Converting userDTO into Account and back", userDTODummy, userDTOfromAccount);
    }

    @Test
    public void convertUserToUserDTOTest() {
        Account accountDummy = TestUtils.getAccountDummy();
        UserDTO userDTOfromAccount = beanConverter.convertUserToUserDTO(accountDummy);
        Account accountFromDTO = beanConverter.convertUserDTOToUser(userDTOfromAccount);
        assertEquals("Converting userDTO into Account and back", accountDummy, accountFromDTO);
    }

    @Test
    public void convertCompanyToCompanyDTO() {
        CompanyDTO companyDTODummy = TestUtils.getCompanyDTODummy();
        Company company = beanConverter.convertCompanyDTOToCompany(companyDTODummy);
        CompanyDTO companyDTO = beanConverter.convertCompanyDTOToCompany(company);
        assertEquals("Converting userDTO into Account and back", companyDTODummy, companyDTO);
    }

    @Test
    public void convertCompanyDTOtoCompany() {
        Company companyDummy = TestUtils.getCompanyDummy();
        CompanyDTO companyDTO = beanConverter.convertCompanyDTOToCompany(companyDummy);
        Company company = beanConverter.convertCompanyDTOToCompany(companyDTO);
        assertEquals("Converting userDTO into Account and back", companyDummy, company);
    }
}
