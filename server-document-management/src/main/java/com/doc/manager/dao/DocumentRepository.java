package com.doc.manager.dao;

import com.doc.manager.domain.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Integer> {
    Document findById(int id);

    Document findByCompany(int company);

    Document findByName(String name);

}
