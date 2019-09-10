package services;

import com.doc.manager.converter.BeanConverter;
import com.doc.manager.dao.AccountRepository;
import com.doc.manager.domain.Account;
import com.doc.manager.service.impl.UserServiceImpl;
import com.doc.manager.transfer.UserDTO;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceTest {

    @InjectMocks
    private UserServiceImpl userService;
    @Mock
    private AccountRepository accountRepository;

    @Mock
    private BeanConverter beanConverter;

    @Mock
    private UserDTO userDTO;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);


    }

    @Test
    public void createUserTest() {
        when(accountRepository.save(any(Account.class))).thenReturn(any());
        when(beanConverter.convertUserDTOToUser(any())).thenReturn(any());
        userService.createUser(userDTO);
    }

    @Test
    public void logoutUserTest() {
        userService.logoutUser();

    }

    @Test
    public void loginUserTest() {
/*
        userService.loginUser();
*/
    }


}
