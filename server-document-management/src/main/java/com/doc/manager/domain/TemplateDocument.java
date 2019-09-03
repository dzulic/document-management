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
    private String id;
    @Column(name = "file_name")
    private String userRole;
    @Column(name = "content_type")
    private String contentType;
    private String data;
    @JoinColumn(name = "created_by")
    private String createdBy;

}
