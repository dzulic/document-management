package com.doc.manager.converter;

import com.doc.manager.domain.Account;
import com.doc.manager.domain.Company;
import com.doc.manager.transfer.CompanyDTO;
import com.doc.manager.transfer.UserDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class BeanConverter {

    public Account convertUserDTOToUser(UserDTO userDTO) {
        Account account = null;
        if (userDTO != null) {
            account = new Account();
            BeanUtils.copyProperties(account, userDTO);
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
}
