package com.doc.manager.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Table(name = "file_document")
@NoArgsConstructor
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

    public FileDocument(String originalFilename, String contentType, byte[] bytes) {
        this.fileName = originalFilename;
        this.contentType = contentType;
        this.data = bytes;
    }
}
