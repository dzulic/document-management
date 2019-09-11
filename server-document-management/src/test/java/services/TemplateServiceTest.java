package services;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.AccountRepository;
import com.doc.manager.dao.TemplateRepository;
import com.doc.manager.domain.Account;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.impl.TemplateServiceImpl;
import com.doc.manager.transfer.TemplateDTO;
import com.doc.manager.util.Constants;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import utils.TestUtils;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class TemplateServiceTest {

    @InjectMocks
    private TemplateServiceImpl templateService;

    @Mock
    private TemplateRepository templateRepository;
    @Mock
    private BeanConverter beanConverter;
    @Mock
    private AccountRepository accountRepository;

    private TemplateDTO templateDTO;

    @Before
    public void onInit() {
        templateDTO = TestUtils.getTemplateDTODummy();
    }

    @Test
    public void createTemplateTest() {
        when(beanConverter.convertUserDTOToUser(any())).thenCallRealMethod();
        when(beanConverter.convertTemplateDTOToTemplate(any())).thenCallRealMethod();
        when(accountRepository.findByEmployeeID(templateDTO.getCreatedBy().getEmployeeID())).thenReturn(any(Account.class));
        RestResponse template = templateService.createTemplate(templateDTO);
        assertEquals("Create template test", Constants.SUCCESS, template.getMessage());
    }

    @Test
    public void searchTemplateTest() {
        RestResponse restResponse = templateService.searchTemplate(templateDTO.getId(), 0);
        RestResponse restResponse1 = templateService.searchTemplate(null, templateDTO.getCreatedBy().getCompanyId());
        assertEquals("Search by id template test", Constants.SUCCESS, restResponse.getMessage());
        assertEquals("Search by company id template test", Constants.SUCCESS, restResponse1.getMessage());

    }

    @Test
    public void getTemplateTest() {
        RestResponse template = templateService.getTemplate(templateDTO);
        assertEquals("Get template test", Constants.SUCCESS, template.getMessage());
    }
}
