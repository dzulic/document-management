package com.doc.manager.dao;

import com.doc.manager.domain.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Integer> {

    List<Document> findByCompany_CompanyId(int id);

    List<Document> findByNameContainingIgnoreCase(String name);

    Document findByNameIgnoreCase(String name);

    Document findById(Long id);

}
