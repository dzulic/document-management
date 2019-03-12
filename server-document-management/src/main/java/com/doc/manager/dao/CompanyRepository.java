package com.doc.manager.dao;

import com.doc.manager.domain.Company;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface CompanyRepository extends CrudRepository<Company, Long> {
}
