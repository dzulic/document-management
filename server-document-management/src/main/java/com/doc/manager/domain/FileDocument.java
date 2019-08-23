package com.doc.manager.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "file_document")
public class FileDocument {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "file_name")
    private String fileName;
    @Column(name = "content_type")
    private String contentType;
    @Lob
    private byte[] data;
    private Company company_id;
    private Account account_id;

    public FileDocument(String originalFilename, String contentType, byte[] bytes) {
        this.fileName = originalFilename;
        this.contentType = contentType;
        this.data = bytes;
    }
}
