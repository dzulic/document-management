package com.doc.manager.transfer;

import java.util.List;

public class DocumentItemDTO {
    String title;
    int position;
    List<DocumentItemFieldDTO> docItemFields;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    public List<DocumentItemFieldDTO> getDocItemFields() {
        return docItemFields;
    }

    public void setDocItemFields(List<DocumentItemFieldDTO> docItemFields) {
        this.docItemFields = docItemFields;
    }
}
