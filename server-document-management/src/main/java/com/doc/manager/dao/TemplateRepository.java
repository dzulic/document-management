package com.doc.manager.dao;

import com.doc.manager.domain.TemplateDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TemplateRepository extends JpaRepository<TemplateDocument, Integer> {
    List<TemplateDocument> findByFileNameContaining(String name);
}
