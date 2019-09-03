package com.doc.manager.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "TemplateDocument")
@Table(name = "template_document")
@Data
public class TemplateDocument implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "file_name")
    private String fileName;
    @Column(name = "content_type")
    private String contentType;
    private String data;
    @ManyToOne
    @JoinColumn(name = "created_by")
    private Account createdBy;

}
