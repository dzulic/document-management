package com.doc.manager.dao;

import com.doc.manager.domain.TemplateDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TemplateRepository extends JpaRepository<TemplateDocument, Integer> {
    List<TemplateDocument> findByFileNameContainingIgnoreCase(String name);

    List<TemplateDocument> findByCreatedBy_Company_CompanyId(int id);

    List<TemplateDocument> findByFileNameContainingAndCreatedBy_Company_CompanyId(String name, int id);

}
