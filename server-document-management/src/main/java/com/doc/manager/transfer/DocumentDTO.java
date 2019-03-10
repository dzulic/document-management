package com.doc.manager.transfer;

import java.util.List;

public class DocumentDTO {

    String name;
    String dateOfCreation;
    UserDTO creator;
    List<DocumentItemDTO> documentItemList;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDateOfCreation() {
        return dateOfCreation;
    }

    public void setDateOfCreation(String dateOfCreation) {
        this.dateOfCreation = dateOfCreation;
    }

    public UserDTO getCreator() {
        return creator;
    }

    public void setCreator(UserDTO creator) {
        this.creator = creator;
    }

    public List<DocumentItemDTO> getDocumentItemList() {
        return documentItemList;
    }

    public void setDocumentItemList(List<DocumentItemDTO> documentItemList) {
        this.documentItemList = documentItemList;
    }
}
