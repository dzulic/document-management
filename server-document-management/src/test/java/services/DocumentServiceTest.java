package services;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.DocumentRepository;
import com.doc.manager.dao.TemplateRepository;
import com.doc.manager.domain.Document;
import com.doc.manager.responses.RestResponse;
import com.doc.manager.service.impl.DocumentServiceImpl;
import com.doc.manager.transfer.DocumentDTO;
import com.doc.manager.util.Constants;
import converters.TestUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class DocumentServiceTest {

    @InjectMocks
    private DocumentServiceImpl documentService;

    @Mock
    private DocumentRepository documentRepository;
    @Mock
    private TemplateRepository templateRepository;

    @Mock
    private BeanConverter beanConverter;

    @Test
    public void createDocumentTest() {
        DocumentDTO documentDTO = TestUtils.getDocumentDTODummy();
        when(templateRepository.getOne(anyInt())).thenReturn(TestUtils.getTemplateDummy());
        RestResponse response = documentService.createDocument(documentDTO);
        assertEquals("Create document test", Constants.SUCCESS, response.getMessage());
    }

    @Test
    public void searchDocumentTest() {
        List<Document> mockList = new ArrayList<>();
        Document mockDoc = mock(Document.class);
        mockList.add(mockDoc);

        when(documentRepository.findByCompany_CompanyId(anyInt())).thenReturn(mockList);
        when(documentRepository.findByNameContaining(anyString())).thenReturn(mockList);
        RestResponse responseByUser = documentService.searchDocument(TestUtils.dummyString, 0);
        RestResponse responseByCompany = documentService.searchDocument(null, TestUtils.dummyint);
        assertEquals("Get document test", Constants.SUCCESS, responseByUser.getMessage());
        assertEquals("Get document test", Constants.SUCCESS, responseByCompany.getMessage());
    }

    @Test
    public void getDocumentTest() {
        RestResponse response = documentService.getDocument(TestUtils.dummyString, TestUtils.dummyint);
        assertEquals("Get document test", Constants.SUCCESS, response.getMessage());
    }

}
