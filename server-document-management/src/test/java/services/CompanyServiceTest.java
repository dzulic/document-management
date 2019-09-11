package services;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.CompanyRepository;
import com.doc.manager.domain.Company;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.impl.CompanyServiceImpl;
import com.doc.manager.util.Constants;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class CompanyServiceTest {

    @InjectMocks
    private CompanyServiceImpl companyService;

    @Mock
    private CompanyRepository companyRepository;

    @Mock
    private BeanConverter beanConverter;

    @Test
    public void createCompanyTest() {
        RestResponse response = companyService.createCompany(any());
        assertEquals("Response for create company", response.getMessage(), Constants.SUCCESS);
    }

    @Test
    public void getCompaniesTest() {
        List<Company> all = companyRepository.findAll();
        RestResponse companies = companyService.getCompanies();
        assertEquals("Response message for getCompanies", companies.getMessage(), Constants.SUCCESS);
        assertEquals("Response for get all companies", all, companies.getData());
    }

    @Test(expected = Exception.class)
    public void getCompaniesTestException() {
        when(companyRepository.findAll()).thenThrow(Exception.class);
        RestResponse companies = companyService.getCompanies();
    }
}
