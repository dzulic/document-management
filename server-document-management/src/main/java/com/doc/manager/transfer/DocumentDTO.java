package com.doc.manager.transfer;

import lombok.Data;

@Data
public class DocumentDTO {

    String name;
    UserDTO createdBy;
    String content;
    CompanyDTO companyDTO;

}
