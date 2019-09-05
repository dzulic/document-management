package com.doc.manager.transfer;

import lombok.Data;

@Data
public class TemplateDTO {

    private UserDTO createdBy;
    private String fileName;
    private String contentType;
    private String data;
    private String id;
}
