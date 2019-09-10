package services;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.CompanyRepository;
import com.doc.manager.domain.Company;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.impl.CompanyServiceImpl;
import com.doc.manager.util.Constants;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

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
    @Mock
    private Company company;

    @Before
    public void init() {
    }

    @Test
    public void createCompanyTest() {
        when(companyRepository.save(company)).thenReturn(company);
        RestResponse response = companyService.createCompany(any());
        assertEquals("Response for create company", response.getMessage(), Constants.SUCCESS);
    }

    @Test
    public void getCompaniesTest() {
        companyService.getCompanies();
    }
}
