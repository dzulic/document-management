package com.doc.manager.dao;

import com.doc.manager.domain.FileDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileEntityRepository extends JpaRepository<FileDocument, Long> {
}
