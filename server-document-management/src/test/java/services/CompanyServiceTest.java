package services;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.CompanyRepository;
import com.doc.manager.domain.Company;
import com.doc.manager.service.impl.CompanyServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class CompanyServiceTest {

    @InjectMocks
    private CompanyServiceImpl companyService;

    @Mock
    private CompanyRepository companyRepository;

    @Mock
    private BeanConverter beanConverter;

    private Company company;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
        company = new Company();
        company.setBusiness("trading");
        company.setCity("Belgrade");
        company.setCompanyId(33333);
        company.setCountry("Serbia");
        company.setEmail("sdskd@dfd.com");
        company.setPhone("3274837487");
        company.setCompanyName("test");
    }

    @Test
    public void createCompanyTest() {
        when(companyRepository.save(company)).thenReturn(company);
/*
        companyService.createCompany();
*/
    }

    @Test
    public void getCompaniesTest() {
        companyService.getCompanies();
    }
}
