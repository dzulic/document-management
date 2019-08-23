package com.doc.manager.transfer;

import lombok.Data;

@Data
public class DocumentDTO {

    String name;
    String dateOfCreation;
    UserDTO creator;
    String content;
}
