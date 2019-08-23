package com.doc.manager.transfer;

import lombok.Data;

import java.util.List;

@Data
public class DocumentItemDTO {
    String title;
    int position;
    List<DocumentItemFieldDTO> docItemFields;
}
