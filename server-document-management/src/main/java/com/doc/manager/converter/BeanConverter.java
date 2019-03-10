package com.doc.manager.converter;

import com.doc.manager.domain.Company;
import com.doc.manager.domain.User;
import com.doc.manager.transfer.CompanyDTO;
import com.doc.manager.transfer.UserDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class BeanConverter {

    public User convertUserDTOToUser(UserDTO userDTO) {
        User user = null;
        if (userDTO != null) {
            user = new User();
            BeanUtils.copyProperties(user, userDTO);
        }
        return user;
    }

    public UserDTO convertUserToUserDTO(User user) {
        UserDTO userDTO = null;
        if (user != null) {
            userDTO = new UserDTO();
            BeanUtils.copyProperties(userDTO, user);
        }
        return userDTO;
    }

    public Company convertCompanyDTOToCompany(CompanyDTO companyDTO) {
        Company company = null;
        if (companyDTO != null) {
            company = new Company();
            BeanUtils.copyProperties(company, companyDTO);
        }
        return company;
    }
}
