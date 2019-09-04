package com.doc.manager.dao;

import com.doc.manager.domain.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {
    Company findByCompanyId(int companyId);
}
