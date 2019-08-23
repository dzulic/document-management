package com.doc.manager.transfer;

import lombok.Data;

import java.util.List;

@Data
public class DocumentDTO {

    String name;
    String dateOfCreation;
    UserDTO creator;
    List<DocumentItemDTO> documentItemList;

}
